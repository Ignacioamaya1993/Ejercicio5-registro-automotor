import { RegistroAutomotor } from './RegistroAutomotor';
import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';

const registro = new RegistroAutomotor();

const auto1 = new Auto('Toyota', 'Corolla', 'ABC123', 4);
const moto1 = new Moto('Yamaha', 'FZ', 'XYZ456', 600);
const camion1 = new Camion('Volvo', 'FH16', 'LMN789', 20000);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log('Lista de Vehículos:', registro.obtenerVehiculos());

const autoActualizado = new Auto('Honda', 'Civic', 'DEF789', 4);
const actualizado = registro.actualizarVehiculo('ABC123', autoActualizado);
console.log('Actualización Exitosa:', actualizado);

console.log('Lista de Vehículos Actualizada:', registro.obtenerVehiculos());

const eliminado = registro.eliminarVehiculo('XYZ456');
console.log('Eliminación Exitosa:', eliminado);

console.log('Lista de Vehículos Final:', registro.obtenerVehiculos());
