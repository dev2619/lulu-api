import { Alerta } from '../entities/alerta.entity';

export interface AlertaRepository {
  save(alerta: Alerta): Promise<void>;
  findActivas(): Promise<Alerta[]>;
  markAsResolved(id: string): Promise<void>;
}
