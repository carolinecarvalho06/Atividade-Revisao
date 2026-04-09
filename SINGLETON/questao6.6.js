class ShoppingCart {
    constructor() {
        if (ShoppingCart.instance) return ShoppingCart.instance;
        this.items = [];
        ShoppingCart.instance = this;
    }

    addItem(product) { this.items.push(product); }
    
    getItems() { return this.items; }
}

const cart = new ShoppingCart();
Object.freeze(cart); // Opcional: garante que a instância não seja alterada