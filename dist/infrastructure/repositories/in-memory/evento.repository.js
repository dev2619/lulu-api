"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEventoRepository = void 0;
const common_1 = require("@nestjs/common");
const evento_entity_1 = require("../../../domain/entities/evento.entity");
let InMemoryEventoRepository = class InMemoryEventoRepository {
    eventos = new Map();
    async save(evento) {
        const eventoToStore = new evento_entity_1.Evento({ ...evento });
        this.eventos.set(eventoToStore.id, eventoToStore);
        return Promise.resolve();
    }
    async findById(id) {
        const evento = this.eventos.get(id);
        return Promise.resolve(evento ? { ...evento } : null);
    }
    async findAllByTipo(tipo) {
        const results = [];
        for (const evento of this.eventos.values()) {
            if (evento.tipo === tipo) {
                results.push({ ...evento });
            }
        }
        return Promise.resolve(results);
    }
    clear() {
        this.eventos.clear();
    }
};
exports.InMemoryEventoRepository = InMemoryEventoRepository;
exports.InMemoryEventoRepository = InMemoryEventoRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryEventoRepository);
//# sourceMappingURL=evento.repository.js.map