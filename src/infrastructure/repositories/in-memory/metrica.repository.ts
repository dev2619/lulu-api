import { Injectable } from '@nestjs/common';
import { Metrica } from '../../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../../domain/repositories/metrica.repository';

@Injectable()
export class InMemoryMetricaRepository implements MetricaRepository {
  private readonly metricas = new Map<string, Metrica>();

  async save(metrica: Metrica): Promise<void> {
    const metricaToStore = new Metrica({ ...metrica });
    this.metricas.set(metricaToStore.id, metricaToStore);
    return Promise.resolve();
  }

  async findByPeriodo(periodo: string): Promise<Metrica[]> {
    const results: Metrica[] = [];
    for (const metrica of this.metricas.values()) {
      if (metrica.periodo === periodo) {
        results.push({ ...metrica }); // Return copies
      }
    }
    return Promise.resolve(results);
  }

  async findByNombre(nombre: string): Promise<Metrica[]> {
    const results: Metrica[] = [];
    for (const metrica of this.metricas.values()) {
      if (metrica.nombre === nombre) {
        results.push({ ...metrica }); // Return copies
      }
    }
    return Promise.resolve(results);
  }

  // Helper method for testing or seeding
  clear(): void {
    this.metricas.clear();
  }
}
