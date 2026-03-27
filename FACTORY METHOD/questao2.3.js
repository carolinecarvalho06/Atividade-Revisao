// Interface/Produto
class Transporte {
    entregar() { throw new Error("Método deve ser implementado"); }
}

// Produtos Concretos
class Caminhao extends Transporte { entregar() { return "Entrega por terra em caixa."; } }
class Navio extends Transporte { entregar() { return "Entrega por mar em container."; } }
class Drone extends Transporte { entregar() { return "Entrega por ar via entrega rápida."; } }

// Criador (Logística)
class Logistica {
    criarTransporte() { throw new Error("Método fábrica deve ser implementado"); }
    planejarEntrega() {
        const transporte = this.criarTransporte();
        return `Logística: ${transporte.entregar()}`;
    }
}

// Criadores Concretos
class LogisticaRodoviaria extends Logistica { criarTransporte() { return new Caminhao(); } }
class LogisticaMaritima extends Logistica { criarTransporte() { return new Navio(); } }
class LogisticaAerea extends Logistica { criarTransporte() { return new Drone(); } }

// Uso
const appLogistica = new LogisticaAerea();
console.log(appLogistica.planejarEntrega());