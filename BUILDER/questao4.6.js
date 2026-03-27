class Pizza {
    constructor() { this.ingredientes = []; }
    exibir() { console.log(`Pizza com: ${this.ingredientes.join(", ")}`); }
}

class PizzaBuilder {
    constructor() { this.pizza = new Pizza(); }
    addQueijo() { this.pizza.ingredientes.push("Queijo"); return this; }
    addTomate() { this.pizza.ingredientes.push("Tomate"); return this; }
    addManjericao() { this.pizza.ingredientes.push("Manjericão"); return this; }
    build() { return this.pizza; }
}

const minhaPizza = new PizzaBuilder().addQueijo().addManjericao().build();
minhaPizza.exibir();