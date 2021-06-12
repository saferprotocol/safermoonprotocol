module.exports = function (deployer, network, accounts) {
  ["Address", "SafeMath", "SaferProtocolDeFi"].forEach(tokenName => {
    const token = artifacts.require(tokenName);
    deployer.deploy(token);
  });
};
