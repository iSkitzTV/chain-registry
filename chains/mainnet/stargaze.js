module.exports = {
    chainID: 'stargaze-1',
    lcd: 'https://stargaze-api.polkachu.com',
    gasAdjustment: 1.5,
    gasPrices: {ustars: 1.2},
    prefix: 'stars',
    coinType: '118',
    baseAsset: 'ustars',
    name: 'Stargaze',
    chainRegistryName: 'stargaze',
    disabledModules: ['swap'],
    icon: process.env.CF_PAGES_URL + '/img/chains/stargaze.svg',
    channels: {
        'phoenix-1': 'channel-266',
        'carbon-1': 'channel-123',
        'crescent-1': 'channel-51',
        'juno-1': 'channel-5',
        'kaiyo-1': 'channel-49',
        'neutron-1': 'channel-191',
        'noble-1': 'channel-204',
        'osmosis-1': 'channel-0',
        'stride-1': 'channel-106',
    },
    explorer: {
        address: 'https://www.mintscan.io/stargaze/account/{}',
        tx: 'https://www.mintscan.io/stargaze/txs/{}',
        validator: 'https://www.mintscan.io/stargaze/validators/{}',
        block: 'https://www.mintscan.io/stargaze/blocks/id/{}',
    },
    tokens: [
        {
            token: 'ustars',
            symbol: 'STARS',
            name: 'Stargaze',
            icon: process.env.CF_PAGES_URL + '/img/coins/stargaze.svg',
            decimals: 6,
            coinGeckoID: 'stargaze',
        },
    ],
    cw20Tokens: require('../../cw20/tokens/mainnet/stargaze'),
}
