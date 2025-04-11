import { Module } from '@nestjs/common';

// Controllers
import { EventoController } from './controllers/evento.controller';
import { AlertaController } from './controllers/alerta.controller';
import { MetricaController } from './controllers/metrica.controller';
import { UsuarioController } from './controllers/usuario.controller';

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
  controllers: [
    EventoController,
    AlertaController,
    MetricaController,
    UsuarioController,
  ],
  providers: [
    ...repositoryProviders,
  ],
  exports: [
    ...repositoryProviders,
  ],
})
export class InfrastructureModule {}
