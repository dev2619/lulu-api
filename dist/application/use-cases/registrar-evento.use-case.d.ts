import { Evento } from '../../domain/entities/evento.entity';
import { EventoRepository } from '../../domain/repositories/evento.repository';
export declare class RegistrarEventoUseCase {
    private readonly eventoRepository;
    constructor(eventoRepository: EventoRepository);
    execute(eventoData: Omit<Evento, 'id' | 'timestamp'>): Promise<string>;
}
