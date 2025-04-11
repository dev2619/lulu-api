"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metrica = void 0;
class Metrica {
    id;
    nombre;
    valor;
    unidad;
    periodo;
    calculadaEn;
    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.valor = props.valor;
        this.unidad = props.unidad;
        this.periodo = props.periodo;
        this.calculadaEn = props.calculadaEn;
    }
}
exports.Metrica = Metrica;
//# sourceMappingURL=metrica.entity.js.map