// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Wallet {
    event Received(address, uint);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    function send(address _to) public payable {
        (bool success, bytes memory data) = _to.call{value: 0}("");
        require(success, "Transaction Failed ");
        console.log("***Transaction Complete***");
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
