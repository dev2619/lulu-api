import { Module } from '@nestjs/common';
import { RegistrarEventoUseCase } from './use-cases/registrar-evento.use-case';
import { GenerarAlertaUseCase } from './use-cases/generar-alerta.use-case';
import { ObtenerMetricasPorPeriodoUseCase } from './use-cases/obtener-metricas-por-periodo.use-case';
import { AutenticarUsuarioUseCase } from './use-cases/autenticar-usuario.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module'; // Import InfrastructureModule

@Module({
  imports: [
    InfrastructureModule,
  ],
  providers: [
    RegistrarEventoUseCase,
    GenerarAlertaUseCase,
    ObtenerMetricasPorPeriodoUseCase,
    AutenticarUsuarioUseCase,
  ],
  exports: [
    RegistrarEventoUseCase,
    GenerarAlertaUseCase,
    ObtenerMetricasPorPeriodoUseCase,
    AutenticarUsuarioUseCase,
  ],
})
export class ApplicationModule {}
