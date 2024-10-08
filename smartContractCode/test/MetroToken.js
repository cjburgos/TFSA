/* eslint-disable no-undef */
const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const {ethers} = require("hardhat");

const tokenRefs = {
    "WMATA": {
        longName: "Metro Token",
        shortName: "WMATA",
        initialSupply: 1000
    },
    "TRAX": {
        longName: "Transportation Token",
        shortName: "TRAX",
        initialSupply: 1000
    },
}
describe("MetroToken",  function () {

    async function deployTokenFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        let tokens = {};
        for (const [name, { longName, shortName, initialSupply }] of Object.entries(tokenRefs)) {
            const MetroToken = await ethers.getContractFactory("MetroToken");
            const metroToken = await MetroToken.deploy(longName, shortName, initialSupply);
        tokens[name] = await metroToken
        }


        return {tokens, owner, otherAccount};
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const {tokens, owner} = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            expect(await wmata.owner()).to.equal(owner.address);
        });
    });

    describe("Approval", function () {
        it("Should allow for approval of an address", async function () {
            const {tokens, owner, otherAccount} = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            await wmata.approve(otherAccount.address, 100);
            expect(await wmata.allowance(owner.address, otherAccount.address)).to.equal(100);
        });
    });

    describe("Transfer", function () {
        it("Should allow for transfer of tokens", async function () {
            // eslint-disable-next-line no-unused-vars
            const {tokens, owner, otherAccount} = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            await wmata.transfer(otherAccount.address, 100);
            expect(await wmata.balanceOf(otherAccount.address)).to.equal(100);
        });
        it("Should deny transfer of tokens if balance is insufficient", async function () {
            const {tokens, owner, otherAccount} = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            await expect(wmata.transferFrom(otherAccount.address,owner.address, 1000)).to.be.reverted;
        });
        it("Should deny transfer of tokens if not approved", async function () {
            const {tokens, owner, otherAccount} = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            await expect(wmata.connect(otherAccount).transfer(owner.address, 100)).to.be.reverted;
        })
        it("Should allow transfer of tokens if approved", async function () {
            // Load the contract fixture and get the required accounts
            const { tokens, owner, otherAccount } = await loadFixture(deployTokenFixture);
            const wmata = await tokens["WMATA"];
            // Transfer 100 tokens from owner to otherAccount
            await wmata.transfer(otherAccount.address, 100);

            //ensure balances
            expect(await wmata.balanceOf(owner.address)).to.equal(900);
            expect(await wmata.balanceOf(otherAccount.address)).to.equal(100);

            // Approve the owner to spend 100 tokens on behalf of otherAccount
            await wmata.connect(otherAccount).approve(owner.address, 100);

            // Check that the allowance has been set correctly
            expect(await wmata.allowance(otherAccount.address, owner.address)).to.equal(100);

            // Now the owner transfers 100 tokens from otherAccount to owner
            await wmata.connect(owner).transferFrom(otherAccount.address, owner.address, 100);

            // Check the final balances
            expect(await wmata.balanceOf(owner.address)).to.equal(1000);
            expect(await wmata.balanceOf(otherAccount.address)).to.equal(0);  // Assuming they had 100 tokens initially
        });

    });

})