"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticarUsuarioUseCase = void 0;
const common_1 = require("@nestjs/common");
let AutenticarUsuarioUseCase = class AutenticarUsuarioUseCase {
    usuarioRepository;
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async execute(input) {
        const usuario = await this.usuarioRepository.findByEmail(input.email);
        if (!usuario) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        if (!usuario.activo) {
            throw new common_1.UnauthorizedException('Usuario inactivo');
        }
        return usuario;
    }
};
exports.AutenticarUsuarioUseCase = AutenticarUsuarioUseCase;
exports.AutenticarUsuarioUseCase = AutenticarUsuarioUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UsuarioRepository')),
    __metadata("design:paramtypes", [Object])
], AutenticarUsuarioUseCase);
//# sourceMappingURL=autenticar-usuario.use-case.js.map