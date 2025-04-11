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
exports.MetricaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const obtener_metricas_por_periodo_use_case_1 = require("../../application/use-cases/obtener-metricas-por-periodo.use-case");
const metrica_entity_1 = require("../../domain/entities/metrica.entity");
let MetricaController = class MetricaController {
    obtenerMetricasPorPeriodoUseCase;
    metricaRepository;
    constructor(obtenerMetricasPorPeriodoUseCase, metricaRepository) {
        this.obtenerMetricasPorPeriodoUseCase = obtenerMetricasPorPeriodoUseCase;
        this.metricaRepository = metricaRepository;
    }
    async listarMetricasPorPeriodo(periodo) {
        return this.obtenerMetricasPorPeriodoUseCase.execute(periodo);
    }
    async buscarMetricasPorNombre(nombre) {
        return this.metricaRepository.findByNombre(nombre);
    }
};
exports.MetricaController = MetricaController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar métricas filtrando por periodo' }),
    (0, swagger_1.ApiQuery)({
        name: 'periodo',
        required: true,
        description: 'Periodo a filtrar (ej: 2024-04, Q1-2024)',
        example: '2024-04-10',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de métricas encontradas para el periodo.',
        type: [metrica_entity_1.Metrica],
    }),
    __param(0, (0, common_1.Query)('periodo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetricaController.prototype, "listarMetricasPorPeriodo", null);
__decorate([
    (0, common_1.Get)('/nombre/:nombre'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar métricas por su nombre' }),
    (0, swagger_1.ApiParam)({
        name: 'nombre',
        description: 'Nombre de la métrica (ej: ventas_diarias)',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de métricas encontradas con ese nombre.',
        type: [metrica_entity_1.Metrica],
    }),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetricaController.prototype, "buscarMetricasPorNombre", null);
exports.MetricaController = MetricaController = __decorate([
    (0, swagger_1.ApiTags)('Metricas'),
    (0, common_1.Controller)('metricas'),
    __param(1, (0, common_1.Inject)('MetricaRepository')),
    __metadata("design:paramtypes", [obtener_metricas_por_periodo_use_case_1.ObtenerMetricasPorPeriodoUseCase, Object])
], MetricaController);
//# sourceMappingURL=metrica.controller.js.map