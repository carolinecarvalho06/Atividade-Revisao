// Interface de Produto (Botão)
class Botao {
    render() { throw new Error("Método abstrato"); }
}

// Produtos Concretos
class BotaoWindows extends Botao { render() { return "[Botão Estilo Windows]"; } }
class BotaoMac extends Botao { render() { return "[Botão Estilo Mac]"; } }
class BotaoLinux extends Botao { render() { return "[Botão Estilo Linux]"; } }

// Criador (Dialogo)
class Dialogo {
    criarBotao() { throw new Error("Factory Method abstrato"); }
    desenhar() {
        const okButton = this.criarBotao();
        console.log(`Renderizando: ${okButton.render()}`);
    }
}

// Criadores Concretos
class DialogoWindows extends Dialogo { criarBotao() { return new BotaoWindows(); } }
class DialogoMac extends Dialogo { criarBotao() { return new BotaoMac(); } }

// Uso
const ui = new DialogoWindows();
ui.desenhar();