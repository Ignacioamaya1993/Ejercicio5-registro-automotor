import { Vehiculo } from './Vehiculo';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    obtenerVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    actualizarVehiculo(patente: string, vehiculoActualizado: Vehiculo): boolean {
        const index = this.vehiculos.findIndex(v => v.patente === patente);
        if (index !== -1) {
            this.vehiculos[index] = vehiculoActualizado;
            return true;
        }
        return false;
    }

    eliminarVehiculo(patente: string): boolean {
        const index = this.vehiculos.findIndex(v => v.patente === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
            return true;
        }
        return false;
    }
}
