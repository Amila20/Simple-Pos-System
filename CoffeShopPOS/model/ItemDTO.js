class ItemDTO {
    constructor(id, name, price, qty) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._qty = qty;
    }

    // Getter for id
    get id() {
        return this._id;
    }

    // Setter for id
    set id(value) {
        this._id = value;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        this._name = value;
    }

    // Getter for price
    get price() {
        return this._price;
    }

    // Setter for price
    set price(value) {
        this._price = value;
    }

    // Getter for qty
    get qty() {
        return this._qty;
    }

    // Setter for qty
    set qty(value) {
        this._qty = value;
    }
}
