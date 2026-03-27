// Produtos: Eletrônico e Etiqueta
class Produto { info() { throw "Erro"; } }

// Família Eletrônicos
class Smartphone extends Produto { info() { return "Smartphone 5G"; } }
class GarantiaEstendida extends Produto { info() { return "Certificado de 2 anos"; } }

// Família Moda
class Camiseta extends Produto { info() { return "Camiseta Algodão"; } }
class EtiquetaMarca extends Produto { info() { return "Tag de Designer"; } }

// Fábrica
class EcommerceFactory {
    criarItemPrincipal() {}
    criarAcessorio() {}
}

class FabricaEletronicos extends EcommerceFactory {
    criarItemPrincipal() { return new Smartphone(); }
    criarAcessorio() { return new GarantiaEstendida(); }
}

class FabricaModa extends EcommerceFactory {
    criarItemPrincipal() { return new Camiseta(); }
    criarAcessorio() { return new EtiquetaMarca(); }
}