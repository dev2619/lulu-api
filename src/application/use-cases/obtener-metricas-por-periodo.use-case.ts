import { Injectable, Inject } from '@nestjs/common';
import { Metrica } from '../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../domain/repositories/metrica.repository';

@Injectable()
export class ObtenerMetricasPorPeriodoUseCase {
  constructor(
    @Inject('MetricaRepository') // Using string token for injection
    private readonly metricaRepository: MetricaRepository,
  ) {}

  async execute(periodo: string): Promise<Metrica[]> {
    // Additional validation or logic could be added here
    return this.metricaRepository.findByPeriodo(periodo);
  }
}
