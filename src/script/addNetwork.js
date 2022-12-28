var eth;
var isTestnet = 'false';

async function addNetwork(type) {

    if (type === 'web3') {
        if (typeof ethereum !== 'undefined') {
            eth = new Web3Eth(ethereum);
        } else if (typeof web3 !== 'undefined') {
            eth = new Web3Eth(web3.givenProvider);
        } else {
            eth = new Web3Eth(ethereum);
        }
    }

    if (typeof eth !== 'undefined') {
        var network = 0;
        network = await eth.net.getId();
        netID = network.toString();
        var siteChain = 'Arbitrum';
        if (netID == "42161" && isTestnet == 'false' && siteChain == 'Arbitrum') {
            alert("Arbitrum Network has already been added to Metamask.");
        } else if (netID == "421613" && isTestnet == 'true' && siteChain == 'Arbitrum') {
            alert("Arbitrum Goerli Network has already been added to Metamask.");
        } else if (netID == "42170" && isTestnet == 'false' && siteChain == 'Nova') {
            alert("Arbitrum Goerli Network has already been added to Metamask.");
        } else if (isTestnet == 'true' && siteChain == 'Arbitrum') {
            const params = [{
                chainId: '0x66EED',
                chainName: 'Arbitrum Goerli Testnet',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                },
                rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
                blockExplorerUrls: ['https://goerli.arbiscan.io/']
            }]

            window.ethereum.request({ method: 'wallet_addEthereumChain', params })
                .then(() => console.log('Success'))
                .catch((error) => console.log("Error", error.message));

        } else if (isTestnet == 'false' && siteChain == 'Arbitrum') {
            const params = [{
                chainId: '0xA4B1',
                chainName: 'Arbitrum One Mainnet',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                },
                rpcUrls: ['https://arb1.arbitrum.io/rpc'],
                blockExplorerUrls: ['https://arbiscan.io/']
            }]

            window.ethereum.request({ method: 'wallet_addEthereumChain', params })
                .then(() => console.log('Success'))
                .catch((error) => console.log("Error", error.message));
        } else if (isTestnet == 'false' && siteChain == 'Nova') {
            const params = [{
                chainId: '0xA4BA',
                chainName: 'Arbitrum Nova Mainnet',
                nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                },
                rpcUrls: ['https://nova.arbitrum.io/rpc'],
                blockExplorerUrls: ['https://nova.arbiscan.io/']
            }]

            window.ethereum.request({ method: 'wallet_addEthereumChain', params })
                .then(() => console.log('Success'))
                .catch((error) => console.log("Error", error.message));
        }
    } else {
        alert('Unable to locate a compatible web3 browser!');
    }
}