const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const {ethers} = require("hardhat");


describe("TFSA",  function () {

    async function deployTFSAFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const longName = "Transportation Flexible SPending Account"
        const shortName = "TFSA";
        const intialSupply = 1000;

        const _TFSA = await ethers.getContractFactory("TFSA");
        const TFSA = await _TFSA.deploy(longName,shortName,intialSupply);
        return {TFSA, owner, otherAccount};
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { TFSA, owner } = await loadFixture(deployTFSAFixture);
            expect(await TFSA.owner()).to.equal(owner.address);
        });
    });

    describe("MintApproval", function () {
        it("Should set the right mint approval", async function () {
            const { TFSA, owner } = await loadFixture(deployTFSAFixture);
            await TFSA.setOperatorApproval(owner, true)
            expect(await TFSA.approved_operators(owner)).to.equal(true);
        });
    });

    describe("Minting", function () {
        it("Should mint the right amount", async function () {
            const { TFSA, owner } = await loadFixture(deployTFSAFixture);
            await TFSA.setOperatorApproval(owner, true)
            const ownerBalance = await TFSA.balanceOf(owner.address);
            const mintAmount = 100;
            const expectedAmountAfterMint = BigInt(mintAmount) + BigInt(ownerBalance);
            await TFSA.mint(owner, mintAmount);
            expect(await TFSA.balanceOf(owner.address)).to.equal(expectedAmountAfterMint);
        });
        it("Should deny non-owners from minting", async function () {
            const { TFSA, otherAccount } = await loadFixture(deployTFSAFixture);
            const mintAmount = 100;
            await expect(TFSA.mint(otherAccount,mintAmount)).to.be.reverted;
        });
    });

    describe("Burning", function () {
        it("Should burn the right amount", async function () {
            const { TFSA, owner } = await loadFixture(deployTFSAFixture);
            await TFSA.setOperatorApproval(owner.address, true);
            const ownerBalance = await TFSA.balanceOf(owner.address);
            const burnAmount = 100;
            const expectedAmountAfterBurn = BigInt(ownerBalance) - BigInt(burnAmount);

            await TFSA.burn(burnAmount);
            expect(await TFSA.balanceOf(owner.address)).to.equal(expectedAmountAfterBurn);
        });
        it("Should deny non-owners from burning", async function () {
            const { TFSA, otherAccount } = await loadFixture(deployTFSAFixture);
            const burnAmount = 100;
            await expect(TFSA.burnFrom(otherAccount,burnAmount)).to.be.reverted;
        });
    });

})