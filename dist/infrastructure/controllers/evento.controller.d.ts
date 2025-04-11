import { RegistrarEventoUseCase } from '../../application/use-cases/registrar-evento.use-case';
import { Evento } from '../../domain/entities/evento.entity';
import { EventoRepository } from '../../domain/repositories/evento.repository';
declare class CreateEventoDto {
    tipo: string;
    payload: Record<string, any>;
    fuente: string;
}
export declare class EventoController {
    private readonly registrarEventoUseCase;
    private readonly eventoRepository;
    constructor(registrarEventoUseCase: RegistrarEventoUseCase, eventoRepository: EventoRepository);
    registrarEvento(createEventoDto: CreateEventoDto): Promise<{
        id: string;
    }>;
    buscarEventoPorId(id: string): Promise<Evento>;
    listarEventosPorTipo(tipo: string): Promise<Evento[]>;
}
export {};
