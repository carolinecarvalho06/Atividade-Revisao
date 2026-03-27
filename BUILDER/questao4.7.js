class Relatorio {
    constructor() { this.partes = []; }
}

class RelatorioBuilder {
    constructor() { this.relatorio = new Relatorio(); }
    setCapa(titulo) { this.relatorio.partes.push(`Capa: ${titulo}`); return this; }
    setSumario() { this.relatorio.partes.push("Sumário Gerado"); return this; }
    setConteudo(txt) { this.relatorio.partes.push(`Conteúdo: ${txt}`); return this; }
    build() { return this.relatorio; }
}

class DiretorRelatorio {
    construirCompleto(builder) {
        return builder.setCapa("Relatório Anual").setSumario().setConteudo("Dados de 2023").build();
    }
}