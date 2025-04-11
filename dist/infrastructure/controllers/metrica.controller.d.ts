import { ObtenerMetricasPorPeriodoUseCase } from '../../application/use-cases/obtener-metricas-por-periodo.use-case';
import { Metrica } from '../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../domain/repositories/metrica.repository';
export declare class MetricaController {
    private readonly obtenerMetricasPorPeriodoUseCase;
    private readonly metricaRepository;
    constructor(obtenerMetricasPorPeriodoUseCase: ObtenerMetricasPorPeriodoUseCase, metricaRepository: MetricaRepository);
    listarMetricasPorPeriodo(periodo: string): Promise<Metrica[]>;
    buscarMetricasPorNombre(nombre: string): Promise<Metrica[]>;
}
