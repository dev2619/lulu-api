import { Injectable } from '@nestjs/common';
import { Alerta } from '../../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../../domain/repositories/alerta.repository';

@Injectable()
export class InMemoryAlertaRepository implements AlertaRepository {
  private readonly alertas = new Map<string, Alerta>();

  async save(alerta: Alerta): Promise<void> {
    const alertaToStore = new Alerta({ ...alerta });
    this.alertas.set(alertaToStore.id, alertaToStore);
    return Promise.resolve();
  }

  async findActivas(): Promise<Alerta[]> {
    const results: Alerta[] = [];
    for (const alerta of this.alertas.values()) {
      if (alerta.estado === 'activa') {
        results.push({ ...alerta }); // Return copies
      }
    }
    return Promise.resolve(results);
  }

  async markAsResolved(id: string): Promise<void> {
    const alerta = this.alertas.get(id);
    if (alerta) {
      // Create a new instance with updated state
      const updatedAlerta = new Alerta({
        ...alerta,
        estado: 'resuelta',
      });
      this.alertas.set(id, updatedAlerta);
    }
    return Promise.resolve();
  }

  // Helper method for testing or seeding
  clear(): void {
    this.alertas.clear();
  }
}
