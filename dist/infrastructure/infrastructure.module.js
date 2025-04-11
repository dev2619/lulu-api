"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const evento_controller_1 = require("./controllers/evento.controller");
const alerta_controller_1 = require("./controllers/alerta.controller");
const metrica_controller_1 = require("./controllers/metrica.controller");
const usuario_controller_1 = require("./controllers/usuario.controller");
const usuario_repository_1 = require("./repositories/in-memory/usuario.repository");
const evento_repository_1 = require("./repositories/in-memory/evento.repository");
const alerta_repository_1 = require("./repositories/in-memory/alerta.repository");
const metrica_repository_1 = require("./repositories/in-memory/metrica.repository");
const repositoryProviders = [
    {
        provide: 'UsuarioRepository',
        useClass: usuario_repository_1.InMemoryUsuarioRepository,
    },
    {
        provide: 'EventoRepository',
        useClass: evento_repository_1.InMemoryEventoRepository,
    },
    {
        provide: 'AlertaRepository',
        useClass: alerta_repository_1.InMemoryAlertaRepository,
    },
    {
        provide: 'MetricaRepository',
        useClass: metrica_repository_1.InMemoryMetricaRepository,
    },
];
let InfrastructureModule = class InfrastructureModule {
};
exports.InfrastructureModule = InfrastructureModule;
exports.InfrastructureModule = InfrastructureModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            evento_controller_1.EventoController,
            alerta_controller_1.AlertaController,
            metrica_controller_1.MetricaController,
            usuario_controller_1.UsuarioController,
        ],
        providers: [
            ...repositoryProviders,
        ],
        exports: [
            ...repositoryProviders,
        ],
    })
], InfrastructureModule);
//# sourceMappingURL=infrastructure.module.js.map