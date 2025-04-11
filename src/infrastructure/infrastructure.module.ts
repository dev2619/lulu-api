import { Module } from '@nestjs/common';
// Remove ApplicationModule import here

// Controllers
import { EventoController } from './controllers/evento.controller';
import { AlertaController } from './controllers/alerta.controller';
import { MetricaController } from './controllers/metrica.controller';
import { UsuarioController } from './controllers/usuario.controller';
// Remove the default AppController import if it exists and is not used
// import { AppController } from './controllers/app.controller';

// In-Memory Repositories (Adapters)
import { InMemoryUsuarioRepository } from './repositories/in-memory/usuario.repository';
import { InMemoryEventoRepository } from './repositories/in-memory/evento.repository';
import { InMemoryAlertaRepository } from './repositories/in-memory/alerta.repository';
import { InMemoryMetricaRepository } from './repositories/in-memory/metrica.repository';

// Define providers for repository interfaces using string tokens
const repositoryProviders = [
  {
    provide: 'UsuarioRepository',
    useClass: InMemoryUsuarioRepository,
  },
  {
    provide: 'EventoRepository',
    useClass: InMemoryEventoRepository,
  },
  {
    provide: 'AlertaRepository',
    useClass: InMemoryAlertaRepository,
  },
  {
    provide: 'MetricaRepository',
    useClass: InMemoryMetricaRepository,
  },
];

@Module({
  imports: [
    // Remove ApplicationModule import here
  ],
  controllers: [
    EventoController,
    AlertaController,
    MetricaController,
    UsuarioController,
    // AppController, // Keep if still needed, remove otherwise
  ],
  providers: [
    ...repositoryProviders,
    // Add other infrastructure services/providers here if needed
  ],
  exports: [
    ...repositoryProviders, // Export the repository providers so other modules can inject them
  ],
})
export class InfrastructureModule {}
