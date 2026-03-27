// Componentes
class Motor { especificacao() {} }
class Roda { tipo() {} }

// Esportivo
class MotorV8 extends Motor { especificacao() { return "V8 Turbo"; } }
class RodaAro20 extends Roda { tipo() { return "Aro 20 Liga Leve"; } }

// Popular
class Motor10 extends Motor { especificacao() { return "1.0 Econômico"; } }
class RodaAro14 extends Roda { tipo() { return "Aro 14 Aço"; } }

class FabricaVeiculo {
    montarMotor() {}
    montarRoda() {}
}

class FabricaEsportivo extends FabricaVeiculo {
    montarMotor() { return new MotorV8(); }
    montarRoda() { return new RodaAro20(); }
}

class FabricaPopular extends FabricaVeiculo {
    montarMotor() { return new Motor10(); }
    montarRoda() { return new RodaAro14(); }
}