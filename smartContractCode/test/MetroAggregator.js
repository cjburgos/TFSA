const {loadFixture} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const {ethers} = require("hardhat");

describe("MetroAggregator",  function () {

    async function deployMetroAggregatorFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const MetroAggregator = await ethers.getContractFactory("MetroAggregator");
        const metroAggregator = await MetroAggregator.deploy();
        return { metroAggregator, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { metroAggregator, owner } = await loadFixture(deployMetroAggregatorFixture);
            expect(await metroAggregator.owner()).to.equal(owner.address);
        });
    });

    describe("setAddresses", function () {
        it("Should set the right tfsa address", async function () {
            const { metroAggregator, owner } = await loadFixture(deployMetroAggregatorFixture);
            const tfsaAddress = "0x8207D032322052AfB9Bf1463aF87fd0c0097EDDE"
            await metroAggregator.setTFSAAddress(tfsaAddress);
            expect(await metroAggregator.tfsaAddress()).to.equal(tfsaAddress);
        });
        it("Should deny non-owners from setting the tfsa address", async function () {
            const { metroAggregator, otherAccount } = await loadFixture(deployMetroAggregatorFixture);
            const treasuryAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
            await expect(metroAggregator.connect(otherAccount).setTreasuryAddress(treasuryAddress)).to.be.reverted;
        });


        it("Should set the right treasury address", async function () {
            const { metroAggregator, owner } = await loadFixture(deployMetroAggregatorFixture);
            const treasuryAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
            await metroAggregator.setTreasuryAddress(treasuryAddress);
            expect(await metroAggregator.treasuryAddress()).to.equal(treasuryAddress);
        });
        it("Should deny non-owners from setting the treasury address", async function () {
            const { metroAggregator, otherAccount } = await loadFixture(deployMetroAggregatorFixture);
            const treasuryAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
            await expect(metroAggregator.connect(otherAccount).setTreasuryAddress(treasuryAddress)).to.be.reverted;
        });
    });

    describe("Rates", function () {
        it("Should set the right rates", async function () {
            const { metroAggregator, owner } = await loadFixture(deployMetroAggregatorFixture);
            const tokenRates = {
                "0x2F8895b08D8F226b19895d46154faB7096fB2593": {
                    rate: 125,
                    decimals: 2
                }
            };
            for (const [tokenAddress, { rate, decimals }] of Object.entries(tokenRates)) {

                console.log(tokenAddress, rate, decimals);
                await metroAggregator.setConversionRate(tokenAddress, rate, decimals);
            }
            const tokenAddress = "0x2F8895b08D8F226b19895d46154faB7096fB2593";
            const expectedRate = tokenRates[tokenAddress].rate * (10 ** tokenRates[tokenAddress].decimals);
            console.log(await metroAggregator.conversionRate(tokenAddress));
            expect(await metroAggregator.conversionRate(tokenAddress)).to.equal(expectedRate);
        });
    });

});