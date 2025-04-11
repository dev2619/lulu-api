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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const autenticar_usuario_use_case_1 = require("../../application/use-cases/autenticar-usuario.use-case");
class LoginDto {
    email;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'admin@example.com',
        description: 'Email del usuario',
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
class UsuarioResponseDto {
    id;
    nombre;
    email;
    rol;
    activo;
    constructor(usuario) {
        this.id = usuario.id;
        this.nombre = usuario.nombre;
        this.email = usuario.email;
        this.rol = usuario.rol;
        this.activo = usuario.activo;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UsuarioResponseDto.prototype, "rol", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UsuarioResponseDto.prototype, "activo", void 0);
let UsuarioController = class UsuarioController {
    autenticarUsuarioUseCase;
    usuarioRepository;
    constructor(autenticarUsuarioUseCase, usuarioRepository) {
        this.autenticarUsuarioUseCase = autenticarUsuarioUseCase;
        this.usuarioRepository = usuarioRepository;
    }
    async login(loginDto) {
        try {
            const usuario = await this.autenticarUsuarioUseCase.execute(loginDto);
            return new UsuarioResponseDto(usuario);
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            throw new common_1.UnauthorizedException('Error durante la autenticación.');
        }
    }
    async obtenerUsuarioPorId(id) {
        const usuario = await this.usuarioRepository.findById(id);
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID "${id}" no encontrado.`);
        }
        return new UsuarioResponseDto(usuario);
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Autenticar un usuario (login)' }),
    (0, swagger_1.ApiBody)({ type: LoginDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario autenticado exitosamente.',
        type: UsuarioResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Credenciales inválidas o usuario inactivo.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un usuario por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID único del usuario', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario encontrado.',
        type: UsuarioResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Usuario no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "obtenerUsuarioPorId", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, swagger_1.ApiTags)('Usuarios'),
    (0, common_1.Controller)('usuarios'),
    __param(1, (0, common_1.Inject)('UsuarioRepository')),
    __metadata("design:paramtypes", [autenticar_usuario_use_case_1.AutenticarUsuarioUseCase, Object])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map