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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearEventoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CrearEventoDto {
    tipo;
    datos;
    timestamp;
}
exports.CrearEventoDto = CrearEventoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'VENTA', description: 'Tipo del evento' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearEventoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: { productoId: 123, cantidad: 2 },
        description: 'Payload JSON opcional del evento',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CrearEventoDto.prototype, "datos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-04-10T10:00:00Z',
        description: 'Timestamp del evento en formato ISO8601',
    }),
    (0, class_validator_1.IsISO8601)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CrearEventoDto.prototype, "timestamp", void 0);
//# sourceMappingURL=crear-evento.dto.js.map