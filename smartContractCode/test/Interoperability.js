/* eslint-disable no-undef */
const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const {ethers} = require("hardhat");

describe("Interoperability",  function () {

    async function deployTFSAFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const longName = "Transportation Flexible SPending Account"
        const shortName = "TFSA";
        const intialSupply = 1000;

        const _TFSA = await ethers.getContractFactory("TFSA");
        const TFSA = await _TFSA.deploy(longName,shortName,intialSupply);
        return {TFSA, owner, otherAccount};
    }

    async function deployTokenFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        let tokens = {};

        const MetroToken = await ethers.getContractFactory("MetroToken");
        tokens["WMATA"] = await MetroToken.deploy("Metro Token", "WMATA", 1000);
        tokens["TRAX"] = await MetroToken.deploy("UTO TRAX Token", "TRAX", 1000);
        tokens["MTA"] = await MetroToken.deploy("MTA faghitaboutit Token", "MTA", 1000);

        return {tokens, owner, otherAccount};
    }

    async function deployMetroAggregatorFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const MetroAggregator = await ethers.getContractFactory("MetroAggregator");
        const metroAggregator = await MetroAggregator.deploy();
        return { metroAggregator, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right MetroAggregate owner", async function () {
            const { metroAggregator, owner } = await loadFixture(deployMetroAggregatorFixture);
            expect(await metroAggregator.owner()).to.equal(owner.address);
        });
        it("Should set the right TFSA owner", async function () {
            const { TFSA, owner } = await loadFixture(deployTFSAFixture);
            expect(await TFSA.owner()).to.equal(owner.address);
        });
        it("Should set the right Metro Token owner", async function () {
            const { tokens, owner } = await loadFixture(deployTokenFixture);

            // eslint-disable-next-line no-unused-vars
            for (const [_name, token] of Object.entries(tokens)) {
                expect(await token.owner()).to.equal(owner.address);
            }
        });
    });

    describe("Lock Tokens", function () {
        it("Should lock the right amount of tokens", async function () {
            const {metroAggregator, owner, otherAccount} = await loadFixture(deployMetroAggregatorFixture);
            const {tokens} = await loadFixture(deployTokenFixture);
            const {TFSA} = await loadFixture(deployTFSAFixture);

            const tokenAmount = 100;
            const tokenName = "WMATA";
            const token = tokens[tokenName];

            const originalBalance = await token.balanceOf(owner.address);

            // Set a rate of 1.25 for the token
            await metroAggregator.setConversionRate(token.target, 125, 2);
            expect(await metroAggregator.conversionRate(token.target)).to.equal(125 * 10 ** 2);
            // set a non-null treasury address
            await metroAggregator.setTreasuryAddress(otherAccount.address);
            expect(await metroAggregator.treasuryAddress()).to.equal(otherAccount.address);

            // Set TFSA address
            await metroAggregator.setTFSAAddress(TFSA.target);
            expect(await metroAggregator.tfsaAddress()).to.equal(TFSA.target);

            // Set the Aggregator as an approved TFSA operator
            await TFSA.setOperatorApproval(metroAggregator.target, true);
            expect(await TFSA.approved_operators(metroAggregator.target)).to.equal(true);

            // Approve Contract to move balance.
            await token.approve(metroAggregator.target, tokenAmount);
            expect(await token.allowance(owner.address, metroAggregator.target)).to.equal(tokenAmount);
            await metroAggregator.lockMetroToken(tokenAmount, token.target);

            expect(await token.balanceOf(metroAggregator.treasuryAddress())).to.equal(tokenAmount);

            const conversionRate = await metroAggregator.conversionRate(token.target);
            const expectedTFSAAmount = BigInt(originalBalance) + (BigInt(tokenAmount) * (BigInt(conversionRate) / BigInt(10 ** 2)));
            expect(await TFSA.balanceOf(owner.address)).to.equal(expectedTFSAAmount);

        });
    });
    describe("Redeem Tokens", function () {
        it("Should Redeem TFSA for an available amount of underlying tokens", async function () {
            const {metroAggregator, owner, otherAccount} = await loadFixture(deployMetroAggregatorFixture);
            const {tokens} = await loadFixture(deployTokenFixture);
            const {TFSA} = await loadFixture(deployTFSAFixture);

            const tokenAmount = 10;
            const tokenName = "TRAX";
            const token = tokens[tokenName];

            console.log("Owner original token amount: ", await token.balanceOf(owner.address));

            await token.transfer(otherAccount, tokenAmount);

            console.log("Owner after transfer: ", await token.balanceOf(owner.address));


            //     Set config
            await metroAggregator.setConversionRate(token.target, 125, 2);
            await metroAggregator.setTreasuryAddress(otherAccount.address);
            await metroAggregator.setTFSAAddress(TFSA.target);
            await TFSA.setOperatorApproval(metroAggregator.target, true);
            await TFSA.approve(metroAggregator.target, tokenAmount);

        //     Redeem

            await metroAggregator.redeemMetroToken(tokenAmount, token.target);

            expect(await TFSA.balanceOf(otherAccount)).to.equal(0);
            expect(await token.balanceOf(otherAccount)).to.equal(tokenAmount);
            expect(await token.balanceOf(owner.address)).to.equal(990);

        });
    });

    describe("Swap Tokens", function () {
        it("It should swap tokens", async function () {
            const {metroAggregator, owner, otherAccount } = await loadFixture(deployMetroAggregatorFixture);
            const {tokens} = await loadFixture(deployTokenFixture);
            const {TFSA} = await loadFixture(deployTFSAFixture);

            const mtaAmount = 10;
            const traxAmount = 1;
            const traxToken = tokens["TRAX"];
            const mtaToken = tokens["MTA"];


            //     Set config
            await metroAggregator.setConversionRate(traxToken.target, 150, 2);
            await metroAggregator.setConversionRate(mtaToken.target, 50, 2);
            await metroAggregator.setTreasuryAddress(otherAccount.address);
            await metroAggregator.setTFSAAddress(TFSA.target);
            await TFSA.setOperatorApproval(metroAggregator.target, true);
            await TFSA.approve(metroAggregator.target, 100000);

        //     send to mta to user to lock.
            const firstUser = ethers.Wallet.createRandom().connect(ethers.provider);
            const oneBillionthUser = ethers.Wallet.createRandom().connect(ethers.provider);

            // Send funds to users
            await owner.sendTransaction({
                to: firstUser.address,
                value: ethers.parseEther("1.0")
            });
            await owner.sendTransaction({
                to: oneBillionthUser.address,
                value: ethers.parseEther("1.0")
            });
            await mtaToken.transfer(firstUser.address, mtaAmount);
            await traxToken.transfer(oneBillionthUser.address, traxAmount);
            await mtaToken.connect(firstUser).approve(metroAggregator.target, mtaAmount);
            await mtaToken.connect(oneBillionthUser).approve(metroAggregator.target, mtaAmount);
            await mtaToken.connect(otherAccount).approve(metroAggregator.target, mtaAmount);

            await traxToken.connect(oneBillionthUser).approve(metroAggregator.target, traxAmount);

            await TFSA.connect(firstUser).approve(metroAggregator.target, 100000);
            await TFSA.connect(oneBillionthUser).approve(metroAggregator.target, 100000);

            await metroAggregator.connect(firstUser).lockMetroToken(mtaAmount, mtaToken.target);
            console.log("Accounts: ", firstUser.address, oneBillionthUser.address, owner.address, otherAccount.address);
            console.log("Contracts: ", mtaToken.target, traxToken.target, TFSA.target, metroAggregator.target);
            console.log("Tresurry MTA balance: ", await mtaToken.balanceOf(otherAccount.address));
            await metroAggregator.connect(oneBillionthUser).swapTokens(traxAmount, traxToken.target, mtaToken.target,);

            console.log(`Final Token Balances - One Bill: \n
            mta: ${await mtaToken.balanceOf(oneBillionthUser.address)}\n
            trax: ${await traxToken.balanceOf(oneBillionthUser.address)}\n
            tfsa: ${await TFSA.balanceOf(firstUser.address)}`);

            expect(await mtaToken.balanceOf(oneBillionthUser.address)).to.equal(3);
            expect(await traxToken.balanceOf(oneBillionthUser.address)).to.equal(0);
            expect(await mtaToken.balanceOf(otherAccount.address)).to.equal(7);
            expect(await traxToken.balanceOf(otherAccount.address)).to.equal(1);
            expect(await TFSA.balanceOf(firstUser.address)).to.equal(5);

        });
    });
})