class Vehiculo {
    constructor(
        public tipo: string,
        public marca: string,
        public modelo: string,
        public patente: string
    ) {}
}

class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo); 
    }
  
    getVehiculo(index: number): Vehiculo | undefined {
        return this.vehiculos[index];
    }
   
    setVehiculo(index: number, vehiculo: Vehiculo): void {
        this.vehiculos[index] = vehiculo;
    }

    darDeBaja(index: number): void {
        this.vehiculos.splice(index, 1);
    }
}

const registro = new RegistroAutomotor();

const auto = new Vehiculo('Auto', 'Toyota', 'Corolla', 'ABC123');
const moto = new Vehiculo('Moto', 'Yamaha', 'FZ', 'XYZ456');

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);

console.log('Vehículo 1:', registro.getVehiculo(0));

registro.setVehiculo(0, new Vehiculo('Auto', 'Honda', 'Civic', 'DEF789'));
console.log('Vehículo 1 Modificado:', registro.getVehiculo(0));

registro.darDeBaja(1);
console.log('Vehículos después de dar de baja:', registro.getVehiculo(1));