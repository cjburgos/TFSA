// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IERC20Detailed is IERC20 {
    function decimals() external view returns (uint8);
}

contract MetroAggregator is Ownable {

    // Store conversion rates for assets
    mapping(address => uint256) public conversionRate;

    // Addresses for TFSA and Treasury
    address public tfsaAddress;
    address public treasuryAddress;

    // Constructor
    constructor() Ownable(msg.sender) {}

    function lockMetroToken(uint256 amount, address token_address) public {
        require(conversionRate[token_address] > 0, "Invalid asset");
        require(IERC20(token_address).balanceOf(msg.sender) >= amount, "Not enough tokens in account");

        uint256 transfer_amount = amount * conversionRate[token_address];

        // Transfer tokens from user to treasury
        require(IERC20(token_address).transferFrom(msg.sender, treasuryAddress, amount), "Transfer to treasury failed");

        // Mint?
        require(IERC20(tfsaAddress).transfer(msg.sender, transfer_amount), "Transfer from TFSA failed");
    }

    function redeemMetroToken(uint256 amount, address redemption_token) public {
        require(conversionRate[redemption_token] > 0, "Invalid asset");
        require(IERC20(tfsaAddress).balanceOf(msg.sender) >= amount, "Not enough tokens in TFSA");

        uint256 transfer_amount = amount / conversionRate[redemption_token];

        // Burn tokens?
        require(IERC20(tfsaAddress).transfer(treasuryAddress, amount), "Transfer to treasury failed");

        // Transfer redemption tokens to user
        require(IERC20(redemption_token).transfer(msg.sender, transfer_amount), "Transfer of redemption tokens failed");
    }

    function swapTokens(uint256 amount, address starting_token, address ending_token) public {
        require(conversionRate[starting_token] > 0, "Invalid starting asset");
        require(conversionRate[ending_token] > 0, "Invalid ending asset");
        require(IERC20(starting_token).balanceOf(msg.sender) >= amount, "Not enough tokens in account");

        // Lock the starting token and redeem the ending token
        lockMetroToken(amount, starting_token);
        redeemMetroToken(amount, ending_token);
    }

    // Function to set conversion rates, supporting "decimal-like" values
    function setConversionRate(address asset, uint256 rate, uint8 decimals) public onlyOwner {
        uint256 final_rate = rate * 10 ** decimals;
        conversionRate[asset] = final_rate;
    }

    // Set the token address of the TFSA
    function setTFSAAddress(address token_address) public onlyOwner {
        tfsaAddress = token_address;
    }

    // Set the treasury address
    function setTreasuryAddress(address token_address) public onlyOwner {
        treasuryAddress = token_address;
    }

}

