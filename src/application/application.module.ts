import { Module } from '@nestjs/common';
import { RegistrarEventoUseCase } from './use-cases/registrar-evento.use-case';
import { GenerarAlertaUseCase } from './use-cases/generar-alerta.use-case';
import { ObtenerMetricasPorPeriodoUseCase } from './use-cases/obtener-metricas-por-periodo.use-case';
import { AutenticarUsuarioUseCase } from './use-cases/autenticar-usuario.use-case';
import { InfrastructureModule } from '../infrastructure/infrastructure.module'; // Import InfrastructureModule

const useCases = [
  RegistrarEventoUseCase,
  GenerarAlertaUseCase,
  ObtenerMetricasPorPeriodoUseCase,
  AutenticarUsuarioUseCase,
];

@Module({
  imports: [
    InfrastructureModule, // Import InfrastructureModule to access exported repository providers
  ],
  providers: [...useCases],
  exports: [...useCases], // Export use cases
})
export class ApplicationModule {}
