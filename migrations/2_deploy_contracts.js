module.exports = function (deployer, network, accounts) {
  ["Address", "SafeMath", "SaferMoonProtocolDeFi"].forEach(tokenName => {
    const token = artifacts.require(tokenName);
    deployer.deploy(token);
  });
};
