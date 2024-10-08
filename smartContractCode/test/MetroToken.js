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

    async function deployTFSAFixture() {
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
            const {tokens, owner} = await loadFixture(deployTFSAFixture);
            const wmata = await tokens["WMATA"];
            expect(await wmata.owner()).to.equal(owner.address);
        });
    });

})