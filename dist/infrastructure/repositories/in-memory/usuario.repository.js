"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../../../domain/entities/usuario.entity");
let InMemoryUsuarioRepository = class InMemoryUsuarioRepository {
    usuarios = new Map();
    async findById(id) {
        const usuario = this.usuarios.get(id);
        return Promise.resolve(usuario ? { ...usuario } : null);
    }
    async findByEmail(email) {
        for (const usuario of this.usuarios.values()) {
            if (usuario.email === email) {
                return Promise.resolve({ ...usuario });
            }
        }
        return Promise.resolve(null);
    }
    async save(usuario) {
        const usuarioToStore = new usuario_entity_1.Usuario({ ...usuario });
        this.usuarios.set(usuarioToStore.id, usuarioToStore);
        return Promise.resolve();
    }
    async delete(id) {
        this.usuarios.delete(id);
        return Promise.resolve();
    }
    clear() {
        this.usuarios.clear();
    }
};
exports.InMemoryUsuarioRepository = InMemoryUsuarioRepository;
exports.InMemoryUsuarioRepository = InMemoryUsuarioRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryUsuarioRepository);
//# sourceMappingURL=usuario.repository.js.map