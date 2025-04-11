"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alerta = void 0;
class Alerta {
    id;
    tipo;
    mensaje;
    nivel;
    creadaPor;
    timestamp;
    estado;
    constructor(props) {
        this.id = props.id;
        this.tipo = props.tipo;
        this.mensaje = props.mensaje;
        this.nivel = props.nivel;
        this.creadaPor = props.creadaPor;
        this.timestamp = props.timestamp;
        this.estado = props.estado;
    }
}
exports.Alerta = Alerta;
//# sourceMappingURL=alerta.entity.js.map