import { Injectable } from '@nestjs/common';
import { Evento } from '../../../domain/entities/evento.entity';
import { EventoRepository } from '../../../domain/repositories/evento.repository';

@Injectable()
export class InMemoryEventoRepository implements EventoRepository {
  private readonly eventos = new Map<string, Evento>();

  async save(evento: Evento): Promise<void> {
    const eventoToStore = new Evento({ ...evento });
    this.eventos.set(eventoToStore.id, eventoToStore);
    return Promise.resolve();
  }

  async findById(id: string): Promise<Evento | null> {
    const evento = this.eventos.get(id);
    return Promise.resolve(evento ? { ...evento } : null);
  }

  async findAllByTipo(tipo: string): Promise<Evento[]> {
    const results: Evento[] = [];
    for (const evento of this.eventos.values()) {
      if (evento.tipo === tipo) {
        results.push({ ...evento }); // Return copies
      }
    }
    return Promise.resolve(results);
  }

  // Helper method for testing or seeding
  clear(): void {
    this.eventos.clear();
  }
}
