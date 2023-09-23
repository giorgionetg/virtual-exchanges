
import IExchange from './interfaces/IExchange'
import IMarket from './interfaces/IMarket';
import Market from './market'

class Exchange implements IExchange {

    name = '';
    markets: IMarket | IMarket[];

    constructor() {
        this.name = "hello";
        this.markets = new Market()
    }

}

export default Exchange;