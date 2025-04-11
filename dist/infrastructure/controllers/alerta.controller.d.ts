import { GenerarAlertaUseCase } from '../../application/use-cases/generar-alerta.use-case';
import { Alerta, NivelAlerta } from '../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../domain/repositories/alerta.repository';
declare class CreateAlertaDto {
    tipo: string;
    mensaje: string;
    nivel: NivelAlerta;
}
export declare class AlertaController {
    private readonly generarAlertaUseCase;
    private readonly alertaRepository;
    constructor(generarAlertaUseCase: GenerarAlertaUseCase, alertaRepository: AlertaRepository);
    generarAlerta(createAlertaDto: CreateAlertaDto): Promise<{
        id: string;
    }>;
    listarAlertasActivas(): Promise<Alerta[]>;
    resolverAlerta(id: string): Promise<void>;
}
export {};
