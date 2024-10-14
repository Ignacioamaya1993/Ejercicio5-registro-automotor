import { Vehiculo } from './Vehiculo';

export class Camion extends Vehiculo {
    constructor(
        marca: string,
        modelo: string,
        patente: string,
        public capacidadCarga: number
    ) {
        super(marca, modelo, patente);
    }
}
