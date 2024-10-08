// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TFSA is ERC20, ERC20Burnable, Ownable {
    mapping(address => bool) public approved_operators;
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) Ownable(msg.sender) {
        _mint(tx.origin, initialSupply);
    }

    function setOperatorApproval(address minter, bool approval) public onlyOwner {
        approved_operators[minter] = approval;
    }

    function mint(address to, uint256 amount) public returns (bool) {
        require(approved_operators[msg.sender], "Minter not approved");
        _mint(to, amount);
        return true;
    }
}