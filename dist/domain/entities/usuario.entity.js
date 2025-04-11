"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    id;
    nombre;
    email;
    rol;
    activo;
    constructor(props) {
        this.id = props.id;
        this.nombre = props.nombre;
        this.email = props.email;
        this.rol = props.rol;
        this.activo = props.activo;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map