"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAlertaRepository = void 0;
const common_1 = require("@nestjs/common");
const alerta_entity_1 = require("../../../domain/entities/alerta.entity");
let InMemoryAlertaRepository = class InMemoryAlertaRepository {
    alertas = new Map();
    async save(alerta) {
        const alertaToStore = new alerta_entity_1.Alerta({ ...alerta });
        this.alertas.set(alertaToStore.id, alertaToStore);
        return Promise.resolve();
    }
    async findActivas() {
        const results = [];
        for (const alerta of this.alertas.values()) {
            if (alerta.estado === 'activa') {
                results.push({ ...alerta });
            }
        }
        return Promise.resolve(results);
    }
    async markAsResolved(id) {
        const alerta = this.alertas.get(id);
        if (alerta) {
            const updatedAlerta = new alerta_entity_1.Alerta({
                ...alerta,
                estado: 'resuelta',
            });
            this.alertas.set(id, updatedAlerta);
        }
        return Promise.resolve();
    }
    clear() {
        this.alertas.clear();
    }
};
exports.InMemoryAlertaRepository = InMemoryAlertaRepository;
exports.InMemoryAlertaRepository = InMemoryAlertaRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryAlertaRepository);
//# sourceMappingURL=alerta.repository.js.map