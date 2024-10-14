import { Vehiculo } from './Vehiculo';

export class Moto extends Vehiculo {
    constructor(
        marca: string,
        modelo: string,
        patente: string,
        public cilindrada: number
    ) {
        super(marca, modelo, patente);
    }
}
