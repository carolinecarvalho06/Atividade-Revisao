class Horario {
    constructor(disciplina, hora, sala) {
        this.disciplina = disciplina;
        this.hora = hora;
        this.sala = sala;
    }

    clone() {
        return new Horario(this.disciplina, this.hora, this.sala);
    }
}

const modeloSegunda = new Horario("Técnicas de Programação", "08:00", "Laboratório 1");
const aulaTerça = modeloSegunda.clone();
aulaTerça.hora = "10:00";
aulaTerça.sala = "Sala 202";
console.log(aulaTerça);