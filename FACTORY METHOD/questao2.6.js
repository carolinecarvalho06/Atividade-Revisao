// Produto
class Servico {
    executar() { throw new Error("Não implementado"); }
}

// Produtos Concretos
class Consulta extends Servico { executar() { return "Realizando consulta médica..."; } }
class Reparo extends Servico { executar() { return "Iniciando reparo técnico..."; } }
class Entrega extends Servico { executar() { return "Saindo para entrega de mercadoria..."; } }

// Criador Abstrato
class Agendador {
    factoryMethod() { throw new Error("Deve ser sobrescrito"); }
    agendar() {
        const servico = this.factoryMethod();
        return `Agendamento: ${servico.executar()}`;
    }
}

// Criadores Concretos
class AgendadorReparo extends Agendador { factoryMethod() { return new Reparo(); } }
class AgendadorConsulta extends Agendador { factoryMethod() { return new Consulta(); } }

// Uso
const agendamento = new AgendadorReparo();
console.log(agendamento.agendar());