class Veiculo {
  mover() {
    console.log("Veículo está se movendo.");
  }
}

class Carro extends Veiculo {
  mover(){
    console.log("O carro está se movendo.");
  }
}

class Moto extends Veiculo {
  mover(){
    console.log("A moto está se movendo");
  }
}


class FabricaVeiculo {
  criarVeiculo() {
    throw new Error("Método 'criarVeiculo()' deve ser implementado");
  }
}

class FabricaCarro extends FabricaVeiculo {
  criarVeiculo(){
    return new Carro();
  }
}

class FabricaMoto extends FabricaVeiculo {
  criarVeiculo(){
    return new Moto();
  }
}


function factoryMethod(){
  const fabricaCarro = new FabricaCarro();
  const carro = fabricaCarro.criarVeiculo();
  carro.mover();

  const fabricaMoto = new FabricaMoto();
  const moto = fabricaMoto.criarVeiculo();
  moto.mover();
}

factoryMethod();