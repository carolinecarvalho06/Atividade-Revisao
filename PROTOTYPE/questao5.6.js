class Pizza {
    constructor(sabor, ingredientes) {
        this.sabor = sabor;
        this.ingredientes = [...ingredientes];
    }

    clone() {
        return new Pizza(this.sabor, this.ingredientes);
    }

    addExtra(ingrediente) {
        this.ingredientes.push(ingrediente);
    }
}

const calabresaBase = new Pizza("Calabresa", ["Molho", "Queijo", "Calabresa"]);
const pedidoEspecial = calabresaBase.clone();
pedidoEspecial.addExtra("Bacon");
console.log(pedidoEspecial);