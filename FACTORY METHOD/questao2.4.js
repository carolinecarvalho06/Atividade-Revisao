// Interface Prova
class Prova {
    exibirTipo() { throw new Error("Implementação obrigatória"); }
}

// Variantes Concretas
class ProvaObjetiva extends Prova { exibirTipo() { return "Prova de múltipla escolha."; } }
class ProvaDissertativa extends Prova { exibirTipo() { return "Prova de questões abertas."; } }
class ProvaPratica extends Prova { exibirTipo() { return "Prova de execução em laboratório."; } }

// Criador
class SistemaEducacional {
    gerarProva() { throw new Error("Factory Method não implementado"); }
}

class CriadorObjetiva extends SistemaEducacional { gerarProva() { return new ProvaObjetiva(); } }
class CriadorPratica extends SistemaEducacional { gerarProva() { return new ProvaPratica(); } }

// Uso
const sistema = new CriadorPratica();
const minhaProva = sistema.gerarProva();
console.log(minhaProva.exibirTipo());