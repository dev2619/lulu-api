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
exports.EventoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registrar_evento_use_case_1 = require("../../application/use-cases/registrar-evento.use-case");
const evento_entity_1 = require("../../domain/entities/evento.entity");
class CreateEventoDto {
    tipo;
    payload;
    fuente;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'VENTA', description: 'Tipo del evento' }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: { productoId: 123, cantidad: 2 },
        description: 'Payload JSON del evento',
    }),
    __metadata("design:type", Object)
], CreateEventoDto.prototype, "payload", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'sistema-facturacion',
        description: 'Fuente del evento',
    }),
    __metadata("design:type", String)
], CreateEventoDto.prototype, "fuente", void 0);
let EventoController = class EventoController {
    registrarEventoUseCase;
    eventoRepository;
    constructor(registrarEventoUseCase, eventoRepository) {
        this.registrarEventoUseCase = registrarEventoUseCase;
        this.eventoRepository = eventoRepository;
    }
    async registrarEvento(createEventoDto) {
        const eventoId = await this.registrarEventoUseCase.execute(createEventoDto);
        return { id: eventoId };
    }
    async buscarEventoPorId(id) {
        const evento = await this.eventoRepository.findById(id);
        if (!evento) {
            throw new common_1.NotFoundException(`Evento con ID "${id}" no encontrado.`);
        }
        return evento;
    }
    async listarEventosPorTipo(tipo) {
        return this.eventoRepository.findAllByTipo(tipo);
    }
};
exports.EventoController = EventoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un nuevo evento' }),
    (0, swagger_1.ApiBody)({ type: CreateEventoDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'El evento ha sido registrado exitosamente.',
        schema: { type: 'object', properties: { id: { type: 'string' } } },
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Datos inválidos.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEventoDto]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "registrarEvento", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar un evento por su ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID único del evento', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Evento encontrado.',
        type: evento_entity_1.Evento,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Evento no encontrado.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "buscarEventoPorId", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar eventos filtrando por tipo' }),
    (0, swagger_1.ApiQuery)({
        name: 'tipo',
        required: true,
        description: 'Tipo de evento a filtrar',
        example: 'VENTA',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de eventos encontrados.',
        type: [evento_entity_1.Evento],
    }),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventoController.prototype, "listarEventosPorTipo", null);
exports.EventoController = EventoController = __decorate([
    (0, swagger_1.ApiTags)('Eventos'),
    (0, common_1.Controller)('eventos'),
    __param(1, (0, common_1.Inject)('EventoRepository')),
    __metadata("design:paramtypes", [registrar_evento_use_case_1.RegistrarEventoUseCase, Object])
], EventoController);
//# sourceMappingURL=evento.controller.js.map