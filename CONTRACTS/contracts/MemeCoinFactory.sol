// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MemeCoin.sol";
// Meme Coin Factory Contract
contract MemeCoinFactory {
    // Struct to represent a user's coin
    struct UserCoin {
        address coinAddress;
        string name;
        uint256 premintSupply;
        MemeCoin.CoinStatus status;
        address network;
    }
    
    // Mapping to store user coins
    mapping(address => UserCoin[]) public userCoins;
    
    // Mapping to track user existence
    mapping(address => bool) public userExists;
    
    // Event for coin creation
    event CoinCreated(
        address indexed user, 
        address indexed coinAddress, 
        string name
    );
    
    // Users list for iteration
    address[] private userList;
    
    // Read Functions
    
    // Check if user exists
    function isUserExists(address _user) external view returns (bool) {
        return userExists[_user];
    }
    
    // Fetch coins for a specific user
    function fetchCoin(address _user) external view returns (UserCoin[] memory) {
        return userCoins[_user];
    }
    
    // Fetch all coins across all users
    function fetchAll() external view returns (UserCoin[] memory allCoins) {
        uint256 totalCoins = 0;
        
        // First, count total coins
        for (uint256 i = 0; i < userList.length; i++) {
            totalCoins += userCoins[userList[i]].length;
        }
        
        // Then, populate the array
        allCoins = new UserCoin[](totalCoins);
        uint256 index = 0;
        
        for (uint256 i = 0; i < userList.length; i++) {
            for (uint256 j = 0; j < userCoins[userList[i]].length; j++) {
                allCoins[index] = userCoins[userList[i]][j];
                index++;
            }
        }
        
        return allCoins;
    }
    
    // Write Functions
    
    // Create a new user
    function createUser(address _user) external {
        require(!userExists[_user], "User already exists");
        userExists[_user] = true;
        userList.push(_user);
    }
    
    // Add a new coin for a user
    function addCoin(
        address _user,
        string memory _name,
        string memory _symbol,
        uint256 _premintSupply,
        address _network,
        uint256 _initialPrice
    ) external returns (address) {
        require(userExists[_user], "User does not exist");
        
        // Create new meme coin
        MemeCoin newCoin = new MemeCoin(
            _name, 
            _symbol, 
            _premintSupply, 
            _user,
            _initialPrice
        );
        
        // Create user coin struct
        UserCoin memory coin = UserCoin({
            coinAddress: address(newCoin),
            name: _name,
            premintSupply: _premintSupply,
            status: MemeCoin.CoinStatus.ACTIVE,
            network: _network
        });
        
        // Add to user's coins
        userCoins[_user].push(coin);
        
        // Emit event
        emit CoinCreated(_user, address(newCoin), _name);
        
        return address(newCoin);
    }
    
    // Update an existing coin
    function updateCoin(
        address _user,
        address _coinAddress,
        string memory _newName,
        uint256 _newPremintSupply
    ) external {
        require(userExists[_user], "User does not exist");
        
        for (uint256 i = 0; i < userCoins[_user].length; i++) {
            if (userCoins[_user][i].coinAddress == _coinAddress) {
                userCoins[_user][i].name = _newName;
                userCoins[_user][i].premintSupply = _newPremintSupply;
                break;
            }
        }
    }
    
    // Update coin status
    function updateStatus(
        address _user,
        address _coinAddress,
        MemeCoin.CoinStatus _newStatus,
        bool _transferOwnership
    ) external {
        require(userExists[_user], "User does not exist");
        
        for (uint256 i = 0; i < userCoins[_user].length; i++) {
            if (userCoins[_user][i].coinAddress == _coinAddress) {
                // Update local status
                userCoins[_user][i].status = _newStatus;
                
                // Update contract status
                MemeCoin coin = MemeCoin(_coinAddress);
                coin.updateStatus(_newStatus);
                
                // Optional ownership transfer
                if (_transferOwnership) {
                    coin.transferOwnership(_user);
                }
                
                break;
            }
        }
    }
}