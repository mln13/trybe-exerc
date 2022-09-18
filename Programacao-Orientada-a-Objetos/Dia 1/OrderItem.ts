class OrderItem {
    _nameItem: string;
    _price: number;
    constructor(name: string, price: number) {
        this._nameItem = name;
        this._price = price;
    }
    get name():string {
        return this._nameItem;
    }
    set name(value: string) {
        this._nameItem = value;
    }
    get price():number {
        return this._price;
    }
    set price(value: number) {
        if (value < 0) throw new Error('Valor invalido')
        this._price = value;
    }

   }

   export default OrderItem;