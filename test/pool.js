var Pool = artifacts.require("./Pool.sol");

contract('Pool', function(accounts) {

  it("...should store the value 89.", function() {
    return Pool.deployed().then(function(instance) {
      poolInstance = instance;

      return simpleStorageInstance.set(89, {from: accounts[0]});
    }).then(function() {
      return simpleStorageInstance.get.call();
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });

});
