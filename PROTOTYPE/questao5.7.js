class Forma {
    constructor(cor, x, y) {
        this.cor = cor;
        this.x = x;
        this.y = y;
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

class Circulo extends Forma {
    constructor(cor, x, y, raio) {
        super(cor, x, y);
        this.raio = raio;
    }
}

const circuloVerde = new Circulo("Verde", 10, 10, 50);
const circuloCopiado = circuloVerde.clone();
circuloCopiado.x = 100; // Move apenas a cópia