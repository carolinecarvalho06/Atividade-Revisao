class Estudante {
    constructor(builder) {
        this.nome = builder.nome;
        this.curso = builder.curso;
        this.email = builder.email; // Opcional
        this.responsavel = builder.responsavel; // Opcional
    }
}

class EstudanteBuilder {
    constructor(nome, curso) {
        this.nome = nome;
        this.curso = curso;
    }
    setEmail(email) { this.email = email; return this; }
    setResponsavel(nome) { this.responsavel = nome; return this; }
    build() { return new Estudante(this); }
}

const aluno = new EstudanteBuilder("João", "DSM").setEmail("joao@email.com").build();