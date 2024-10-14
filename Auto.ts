import { Vehiculo } from './Vehiculo';

export class Auto extends Vehiculo {
    constructor(
        marca: string,
        modelo: string,
        patente: string,
        public cantidadPuertas: number
    ) {
        super(marca, modelo, patente);
    }
}
