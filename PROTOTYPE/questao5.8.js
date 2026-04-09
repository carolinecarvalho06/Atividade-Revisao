class Cargo {
    constructor(nome, requisitos) {
        this.nome = nome;
        this.requisitos = requisitos;
    }

    clone() {
        return new Cargo(this.nome, [...this.requisitos]);
    }
}

const desenvolvedorJunior = new Cargo("Dev Jr", ["JS", "HTML", "CSS"]);
const desenvolvedorPleno = desenvolvedorJunior.clone();
desenvolvedorPleno.nome = "Dev Pleno";
desenvolvedorPleno.requisitos.push("NodeJS", "SQL");