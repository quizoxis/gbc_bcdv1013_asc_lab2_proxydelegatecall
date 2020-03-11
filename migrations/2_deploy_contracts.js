const ProxyDelegate = artifacts.require('ProxyDelegate');
const ProxyDelegateWithCall = artifacts.require('ProxyDelegateWithCall');
const SomeLibrary = artifacts.require('SomeLibrary');

module.exports = function(deployer) {
    deployer
    .deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address))
    .then(() => deployer.deploy(ProxyDelegateWithCall, SomeLibrary.address));
}
