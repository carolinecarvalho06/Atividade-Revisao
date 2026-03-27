// Produtos Abstratos
class Arma { usar() { throw "Método Abstrato"; } }
class Habilidade { ativar() { throw "Método Abstrato"; } }

// Família Heróica
class EspadaLuz extends Arma { usar() { return "Corta com luz pura!"; } }
class Cura extends Habilidade { ativar() { return "Recupera vida do aliado."; } }

// Família Malvada
class MachadoSombrio extends Arma { usar() { return "Golpe de trevas!"; } }
class Maldicao extends Habilidade { ativar() { return "Drena energia do inimigo."; } }

// Fábrica Abstrata
class FabricaPersonagem {
    criarArma() {}
    criarHabilidade() {}
}

// Fábricas Concretas
class FabricaHeroica extends FabricaPersonagem {
    criarArma() { return new EspadaLuz(); }
    criarHabilidade() { return new Cura(); }
}

class FabricaMalvada extends FabricaPersonagem {
    criarArma() { return new MachadoSombrio(); }
    criarHabilidade() { return new Maldicao(); }
}

// Uso
const fabrica = new FabricaMalvada();
const arma = fabrica.criarArma();
console.log(arma.usar()); // Golpe de trevas!