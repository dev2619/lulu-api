"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
class Evento {
    id;
    tipo;
    payload;
    timestamp;
    fuente;
    constructor(props) {
        this.id = props.id;
        this.tipo = props.tipo;
        this.payload = props.payload;
        this.timestamp = props.timestamp;
        this.fuente = props.fuente;
    }
}
exports.Evento = Evento;
//# sourceMappingURL=evento.entity.js.map