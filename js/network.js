var isTestNet = getParamValue('testnet') == 'true';

function getParamValue(param) {
    return decodeURIComponent((new RegExp('[?|&]' + param + '=([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function currentNetwork() {
    return isTestNet ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;
}

function headerHtml() {
    return '<h1>SegWit Paper Wallet' + (isTestNet ? '<span style="color:red;"> (TestNet)</span>' : '') + '</h1>';
}

function apiDomain() {
    
}

function explorerDomain() {
    return isTestNet ? 'https://live.blockcypher.com/btc-testnet' : 'https://live.blockcypher.com/btc';
}