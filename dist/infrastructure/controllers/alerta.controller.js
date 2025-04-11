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
exports.AlertaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const generar_alerta_use_case_1 = require("../../application/use-cases/generar-alerta.use-case");
const alerta_entity_1 = require("../../domain/entities/alerta.entity");
class CreateAlertaDto {
    tipo;
    mensaje;
    nivel;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'REGLA', description: 'Tipo de la alerta' }),
    __metadata("design:type", String)
], CreateAlertaDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Umbral de temperatura excedido',
        description: 'Mensaje descriptivo de la alerta',
    }),
    __metadata("design:type", String)
], CreateAlertaDto.prototype, "mensaje", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'alto',
        enum: ['bajo', 'medio', 'alto', 'crítico'],
        description: 'Nivel de severidad de la alerta',
    }),
    __metadata("design:type", String)
], CreateAlertaDto.prototype, "nivel", void 0);
let AlertaController = class AlertaController {
    generarAlertaUseCase;
    alertaRepository;
    constructor(generarAlertaUseCase, alertaRepository) {
        this.generarAlertaUseCase = generarAlertaUseCase;
        this.alertaRepository = alertaRepository;
    }
    async generarAlerta(createAlertaDto) {
        const alertaId = await this.generarAlertaUseCase.execute(createAlertaDto);
        return { id: alertaId };
    }
    async listarAlertasActivas() {
        return this.alertaRepository.findActivas();
    }
    async resolverAlerta(id) {
        await this.alertaRepository.markAsResolved(id);
    }
};
exports.AlertaController = AlertaController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Generar una nueva alerta' }),
    (0, swagger_1.ApiBody)({ type: CreateAlertaDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'La alerta ha sido generada exitosamente.',
        schema: { type: 'object', properties: { id: { type: 'string' } } },
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos inválidos.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateAlertaDto]),
    __metadata("design:returntype", Promise)
], AlertaController.prototype, "generarAlerta", null);
__decorate([
    (0, common_1.Get)('/activas'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas las alertas activas' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de alertas activas.',
        type: [alerta_entity_1.Alerta],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AlertaController.prototype, "listarAlertasActivas", null);
__decorate([
    (0, common_1.Patch)(':id/resolver'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Marcar una alerta como resuelta' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID único de la alerta', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Alerta marcada como resuelta.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Alerta no encontrada.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AlertaController.prototype, "resolverAlerta", null);
exports.AlertaController = AlertaController = __decorate([
    (0, swagger_1.ApiTags)('Alertas'),
    (0, common_1.Controller)('alertas'),
    __param(1, (0, common_1.Inject)('AlertaRepository')),
    __metadata("design:paramtypes", [generar_alerta_use_case_1.GenerarAlertaUseCase, Object])
], AlertaController);
//# sourceMappingURL=alerta.controller.js.map