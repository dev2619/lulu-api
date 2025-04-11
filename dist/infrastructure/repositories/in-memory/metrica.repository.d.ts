import { Metrica } from '../../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../../domain/repositories/metrica.repository';
export declare class InMemoryMetricaRepository implements MetricaRepository {
    private readonly metricas;
    save(metrica: Metrica): Promise<void>;
    findByPeriodo(periodo: string): Promise<Metrica[]>;
    findByNombre(nombre: string): Promise<Metrica[]>;
    clear(): void;
}
