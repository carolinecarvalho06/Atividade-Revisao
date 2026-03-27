class GradeHoraria {
    constructor() { this.aulas = []; }
}

class GradeBuilder {
    constructor() { this.grade = new GradeHoraria(); }
    addDisciplina(nome, horario, sala) {
        this.grade.aulas.push({ nome, horario, sala });
        return this;
    }
    build() { return this.grade; }
}

const grade = new GradeBuilder()
    .addDisciplina("POO", "08:00", "Sala 101")
    .addDisciplina("Banco de Dados", "10:00", "Lab 02")
    .build();