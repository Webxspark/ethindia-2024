// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

// Custom Meme Coin Token Contract
contract MemeCoin is ERC20, Ownable, ERC20Permit {
    enum CoinStatus { ACTIVE, INACTIVE }
    
    // Coin status tracking
    CoinStatus public status;
    
    // Price of the token (in wei)
    uint256 public tokenPrice;
    
    // Maximum supply of tokens
    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1 billion tokens
    
    // Event for token purchase
    event TokensPurchased(address indexed buyer, uint256 amount);
    
    constructor(
        string memory name, 
        string memory symbol, 
        uint256 initialSupply, 
        address initialOwner,
        uint256 _initialPrice
    ) ERC20(name, symbol) ERC20Permit(name) Ownable(initialOwner) {
        // Mint initial supply to the owner
        _mint(initialOwner, initialSupply);
        
        // Set initial token price (in wei)
        tokenPrice = _initialPrice;
        
        // Set initial status
        status = CoinStatus.ACTIVE;
    }
    
    // Buy tokens function
    function buy() external payable {
        // Check if coin is active
        require(status == CoinStatus.ACTIVE, "Coin is not active");
        
        // Calculate number of tokens to buy based on sent ETH
        uint256 tokensToBuy = (msg.value * 10**decimals()) / tokenPrice;
        
        // Ensure we don't exceed max supply
        require(
            totalSupply() + tokensToBuy <= MAX_SUPPLY, 
            "Purchase would exceed max supply"
        );
        
        // Mint new tokens to the buyer
        _mint(msg.sender, tokensToBuy);
        
        // Emit purchase event
        emit TokensPurchased(msg.sender, tokensToBuy);
    }
    
    // Buy function with specific amount input
    function buySpecificAmount(uint256 tokenAmount) external payable {
        // Check if coin is active
        require(status == CoinStatus.ACTIVE, "Coin is not active");
        
        // Calculate required ETH for specified token amount
        uint256 requiredEth = (tokenAmount * tokenPrice) / 10**decimals();
        
        // Check if sent ETH is sufficient
        require(msg.value >= requiredEth, "Insufficient ETH sent");
        
        // Ensure we don't exceed max supply
        require(
            totalSupply() + tokenAmount <= MAX_SUPPLY, 
            "Purchase would exceed max supply"
        );
        
        // Mint specified amount of tokens to the buyer
        _mint(msg.sender, tokenAmount);
        
        // Refund excess ETH
        if (msg.value > requiredEth) {
            payable(msg.sender).transfer(msg.value - requiredEth);
        }
        
        // Emit purchase event
        emit TokensPurchased(msg.sender, tokenAmount);
    }
    
    // Allow owner to update token price
    function updateTokenPrice(uint256 _newPrice) external onlyOwner {
        require(_newPrice > 0, "Price must be greater than zero");
        tokenPrice = _newPrice;
    }
    
    // Withdraw collected ETH (only owner)
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner()).transfer(balance);
    }
    
    // Function to update coin status (only owner can call)
    function updateStatus(CoinStatus _newStatus) external onlyOwner {
        status = _newStatus;
    }
    
    // Function to check current status
    function getStatus() external view returns (CoinStatus) {
        return status;
    }
}

