// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TimeLockedWallet {
    uint public unlockTime;
    address public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint256 _unlockTime, address _owner) payable {
    require(_unlockTime > block.timestamp, "Unlock time should be in the future");
    unlockTime = _unlockTime;
    owner = _owner;
}

    function withdraw() public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        payable(owner).transfer(address(this).balance);
    }
}
