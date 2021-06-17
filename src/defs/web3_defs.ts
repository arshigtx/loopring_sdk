export enum ChainId {
    MAINNET = 1,
    GORLI = 5,
}

export const NetworkContextName = 'NETWORK'

export enum ConnectorNames {
    Unknown = 'Unknown',
    Injected = 'Injected',
    Network = 'Network',
    WalletConnect = 'WalletConnect',
    WalletLink = 'WalletLink',
    Ledger = 'Ledger',
    Trezor = 'Trezor',
    Authereum = 'Authereum',
}

export enum SigSuffix {
    Suffix02 = '02',
    Suffix03 = '03',
}
