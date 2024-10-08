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
})