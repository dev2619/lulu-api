"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryMetricaRepository = void 0;
const common_1 = require("@nestjs/common");
const metrica_entity_1 = require("../../../domain/entities/metrica.entity");
let InMemoryMetricaRepository = class InMemoryMetricaRepository {
    metricas = new Map();
    async save(metrica) {
        const metricaToStore = new metrica_entity_1.Metrica({ ...metrica });
        this.metricas.set(metricaToStore.id, metricaToStore);
        return Promise.resolve();
    }
    async findByPeriodo(periodo) {
        const results = [];
        for (const metrica of this.metricas.values()) {
            if (metrica.periodo === periodo) {
                results.push({ ...metrica });
            }
        }
        return Promise.resolve(results);
    }
    async findByNombre(nombre) {
        const results = [];
        for (const metrica of this.metricas.values()) {
            if (metrica.nombre === nombre) {
                results.push({ ...metrica });
            }
        }
        return Promise.resolve(results);
    }
    clear() {
        this.metricas.clear();
    }
};
exports.InMemoryMetricaRepository = InMemoryMetricaRepository;
exports.InMemoryMetricaRepository = InMemoryMetricaRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryMetricaRepository);
//# sourceMappingURL=metrica.repository.js.map