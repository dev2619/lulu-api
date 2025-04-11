import { Alerta } from '../../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../../domain/repositories/alerta.repository';
export declare class InMemoryAlertaRepository implements AlertaRepository {
    private readonly alertas;
    save(alerta: Alerta): Promise<void>;
    findActivas(): Promise<Alerta[]>;
    markAsResolved(id: string): Promise<void>;
    clear(): void;
}
