// Produtos de UI
class Botao { render() {} }
class Menu { render() {} }

// Windows
class BotaoWin extends Botao { render() { return "Botão Quadrado"; } }
class MenuWin extends Menu { render() { return "Menu Barra Superior"; } }

// Mac
class BotaoMac extends Botao { render() { return "Botão Arredondado"; } }
class MenuMac extends Menu { render() { return "Menu Dock Inferior"; } }

// Fábrica Abstrata
class UIFactory {
    criarBotao() {}
    criarMenu() {}
}

class WindowsFactory extends UIFactory {
    criarBotao() { return new BotaoWin(); }
    criarMenu() { return new MenuWin(); }
}