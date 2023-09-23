import IMarket from './IMarket';

interface Exchange {
    name: string,
    markets: IMarket[] | IMarket,
}

export default Exchange;