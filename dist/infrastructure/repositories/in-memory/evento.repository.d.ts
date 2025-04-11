import { Evento } from '../../../domain/entities/evento.entity';
import { EventoRepository } from '../../../domain/repositories/evento.repository';
export declare class InMemoryEventoRepository implements EventoRepository {
    private readonly eventos;
    save(evento: Evento): Promise<void>;
    findById(id: string): Promise<Evento | null>;
    findAllByTipo(tipo: string): Promise<Evento[]>;
    clear(): void;
}
