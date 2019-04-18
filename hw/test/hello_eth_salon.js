var HelloEthSalon = artifacts.require('HelloEthSalon');

contract('HelloEthSalon', function(accounts) {
  it("should assert true", function(done) {
    var hello_eth_salon = HelloEthSalon.deployed();
    assert.isTrue(true);
    done();
  });
});
