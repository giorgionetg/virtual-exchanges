import IMarket from "./interfaces/IMarket";

class Market implements IMarket {
    name = ''
    token = ''
    constructor () {
        this.name = 'Market Example'
        this.token = 'bitcoin'
    }
}

export default Market;