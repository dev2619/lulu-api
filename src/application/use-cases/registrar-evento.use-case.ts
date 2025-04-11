import { Injectable, Inject } from '@nestjs/common';
import { Evento } from '../../domain/entities/evento.entity';
import { EventoRepository } from '../../domain/repositories/evento.repository';

@Injectable()
export class RegistrarEventoUseCase {
  constructor(
    @Inject('EventoRepository') // Using string token for injection
    private readonly eventoRepository: EventoRepository,
  ) {}

  async execute(eventoData: Omit<Evento, 'id' | 'timestamp'>): Promise<string> {
    // Basic validation could go here
    // For now, we assume data is valid

    const evento = new Evento({
      ...eventoData,
      id: crypto.randomUUID(), // Generate a simple ID for now
      timestamp: new Date(),
    });

    await this.eventoRepository.save(evento);

    return evento.id; // Return the ID of the created event
  }
}
