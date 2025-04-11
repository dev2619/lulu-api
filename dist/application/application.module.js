"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationModule = void 0;
const common_1 = require("@nestjs/common");
const registrar_evento_use_case_1 = require("./use-cases/registrar-evento.use-case");
const generar_alerta_use_case_1 = require("./use-cases/generar-alerta.use-case");
const obtener_metricas_por_periodo_use_case_1 = require("./use-cases/obtener-metricas-por-periodo.use-case");
const autenticar_usuario_use_case_1 = require("./use-cases/autenticar-usuario.use-case");
const infrastructure_module_1 = require("../infrastructure/infrastructure.module");
const useCases = [
    registrar_evento_use_case_1.RegistrarEventoUseCase,
    generar_alerta_use_case_1.GenerarAlertaUseCase,
    obtener_metricas_por_periodo_use_case_1.ObtenerMetricasPorPeriodoUseCase,
    autenticar_usuario_use_case_1.AutenticarUsuarioUseCase,
];
let ApplicationModule = class ApplicationModule {
};
exports.ApplicationModule = ApplicationModule;
exports.ApplicationModule = ApplicationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            infrastructure_module_1.InfrastructureModule,
        ],
        providers: [...useCases],
        exports: [...useCases],
    })
], ApplicationModule);
//# sourceMappingURL=application.module.js.map