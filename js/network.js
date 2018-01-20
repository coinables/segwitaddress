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
    return isTestNet ? 'https://testnet-api.smartbit.com.au' : 'https://api.smartbit.com.au';
}

function explorerDomain() {
    return isTestNet ? 'https://testnet.smartbit.com.au' : 'https://www.smartbit.com.au';
}