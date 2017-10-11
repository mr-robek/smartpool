pragma solidity ^0.4.2;

contract Pool {

  mapping (address => uint256) public contributions;

  uint256 public totalEthValue;
  address crowdsale;
  address tokenAddress;
  
  function Pool (address pCrowdsale, address pTokenAddress) {
    crowdsale = pCrowdsale;
    tokenAddress = pTokenAddress;
  }

  function () payable {
    contributions[msg.sender] += msg.value;
    totalEthValue += msg.value;
  }

  function submit() {
    if(!crowdsale.call.value(totalEthValue)())
      revert();
  }
}
