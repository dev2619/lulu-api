import { Injectable, Inject } from '@nestjs/common';
import {
  Alerta,
  NivelAlerta,
  CreadorAlerta,
} from '../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../domain/repositories/alerta.repository';

interface GenerarAlertaInput {
  tipo: string; // ej: 'REGLA', 'EVENTO', 'ERROR'
  mensaje: string;
  nivel: NivelAlerta;
  creadaPor?: CreadorAlerta; // Optional, defaults to 'sistema'
}

@Injectable()
export class GenerarAlertaUseCase {
  constructor(
    @Inject('AlertaRepository') // Using string token for injection
    private readonly alertaRepository: AlertaRepository,
  ) {}

  async execute(input: GenerarAlertaInput): Promise<string> {
    const alerta = new Alerta({
      id: crypto.randomUUID(), // Generate a simple ID
      tipo: input.tipo,
      mensaje: input.mensaje,
      nivel: input.nivel,
      creadaPor: input.creadaPor || 'sistema', // Default to 'sistema'
      timestamp: new Date(),
      estado: 'activa', // Default to 'activa'
    });

    await this.alertaRepository.save(alerta);

    return alerta.id; // Return the ID of the created alert
  }
}
