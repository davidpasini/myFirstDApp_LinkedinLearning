const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

  contract('ApprovalContract', function (accounts) {

    it('initiates contract', async function() {
      const contract = await ApprovalContract.deployed();
      const approver = await contract.approver.call();
      assert.equal(approver, 0x3DaEf41f21BfC475796D42B758F9fcE9D181754C, "approvers don't match");
    });

    it('takes a deposit', async function() {
      const contract = await ApprovalContract.deployed();
      await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1] });
      const balance = await web3.eth.getBalance(contract.address);

      assert.equal(
        balance,
        1e+18,
        "amount didn't match"
      );
    });
  });
