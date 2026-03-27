// Fábrica de Localização
class BankFactory {
    criarIdioma() {}
    criarLayout() {}
}

class BrazilBankFactory extends BankFactory {
    criarIdioma() { return "Português-BR"; }
    criarLayout() { return "Layout Cores Verde/Amarelo"; }
}

class USABankFactory extends BankFactory {
    criarIdioma() { return "English-US"; }
    criarLayout() { return "Layout Clean Blue"; }
}