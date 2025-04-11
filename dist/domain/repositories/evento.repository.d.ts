import { Evento } from '../entities/evento.entity';
export interface EventoRepository {
    save(evento: Evento): Promise<void>;
    findById(id: string): Promise<Evento | null>;
    findAllByTipo(tipo: string): Promise<Evento[]>;
}
