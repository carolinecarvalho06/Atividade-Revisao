class Documento {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    clone() {
        // Retorna uma nova instância com os mesmos dados
        return new Documento(this.titulo, this.conteudo);
    }

    exibir() {
        console.log(`Doc: ${this.titulo} | Conteúdo: ${this.conteudo}`);
    }
}

// Uso
const contratoPadrao = new Documento("Contrato Base", "Cláusulas de serviço...");
const contratoClienteA = contratoPadrao.clone();
contratoClienteA.titulo = "Contrato - Cliente João";
contratoClienteA.exibir();