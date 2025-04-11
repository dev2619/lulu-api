import { NivelAlerta, CreadorAlerta } from '../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../domain/repositories/alerta.repository';
interface GenerarAlertaInput {
    tipo: string;
    mensaje: string;
    nivel: NivelAlerta;
    creadaPor?: CreadorAlerta;
}
export declare class GenerarAlertaUseCase {
    private readonly alertaRepository;
    constructor(alertaRepository: AlertaRepository);
    execute(input: GenerarAlertaInput): Promise<string>;
}
export {};
