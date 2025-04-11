import { Metrica } from '../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../domain/repositories/metrica.repository';
export declare class ObtenerMetricasPorPeriodoUseCase {
    private readonly metricaRepository;
    constructor(metricaRepository: MetricaRepository);
    execute(periodo: string): Promise<Metrica[]>;
}
