import { Metrica } from '../entities/metrica.entity';

export interface MetricaRepository {
  save(metrica: Metrica): Promise<void>;
  findByPeriodo(periodo: string): Promise<Metrica[]>;
  findByNombre(nombre: string): Promise<Metrica[]>;
}
