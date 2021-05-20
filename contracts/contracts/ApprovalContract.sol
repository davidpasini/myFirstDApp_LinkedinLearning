pragma solidity ^0.5.16;

contract ApprovalContract {

  address public sender;
  address payable public receiver;
  address public constant approver = 0x3DaEf41f21BfC475796D42B758F9fcE9D181754C;

  function deposit(address payable _receiver) external payable{
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address) {
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(address(this).balance);
  }
}
