import {
  Controller,
  Get,
  Param,
  Query,
  Inject,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ObtenerMetricasPorPeriodoUseCase } from '../../application/use-cases/obtener-metricas-por-periodo.use-case';
import { Metrica } from '../../domain/entities/metrica.entity';
import { MetricaRepository } from '../../domain/repositories/metrica.repository';

@ApiTags('Metricas')
@Controller('metricas')
export class MetricaController {
  constructor(
    private readonly obtenerMetricasPorPeriodoUseCase: ObtenerMetricasPorPeriodoUseCase,
    @Inject('MetricaRepository') // Inject repository for findByNombre
    private readonly metricaRepository: MetricaRepository,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar métricas filtrando por periodo' })
  @ApiQuery({
    name: 'periodo',
    required: true,
    description: 'Periodo a filtrar (ej: 2024-04, Q1-2024)',
    example: '2024-04-10',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de métricas encontradas para el periodo.',
    type: [Metrica], // Assuming Metrica class can be used for Swagger schema
  })
  async listarMetricasPorPeriodo(
    @Query('periodo') periodo: string,
  ): Promise<Metrica[]> {
    return this.obtenerMetricasPorPeriodoUseCase.execute(periodo);
  }

  @Get('/nombre/:nombre')
  @ApiOperation({ summary: 'Buscar métricas por su nombre' })
  @ApiParam({
    name: 'nombre',
    description: 'Nombre de la métrica (ej: ventas_diarias)',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de métricas encontradas con ese nombre.',
    type: [Metrica], // Assuming Metrica class can be used for Swagger schema
  })
  async buscarMetricasPorNombre(
    @Param('nombre') nombre: string,
  ): Promise<Metrica[]> {
    return this.metricaRepository.findByNombre(nombre);
  }
}
