import {
  Controller,
  Post,
  Get,
  Param,
  Query,
  Body,
  Inject,
  HttpStatus,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiProperty, // Add ApiProperty import
} from '@nestjs/swagger';
import { RegistrarEventoUseCase } from '../../application/use-cases/registrar-evento.use-case';
import { Evento } from '../../domain/entities/evento.entity';
import { EventoRepository } from '../../domain/repositories/evento.repository';

// DTO for creating an event (excluding id and timestamp)
class CreateEventoDto {
  @ApiProperty({ example: 'VENTA', description: 'Tipo del evento' })
  tipo: string;

  @ApiProperty({
    example: { productoId: 123, cantidad: 2 },
    description: 'Payload JSON del evento',
  })
  payload: Record<string, any>;

  @ApiProperty({
    example: 'sistema-facturacion',
    description: 'Fuente del evento',
  })
  fuente: string;
}

@ApiTags('Eventos')
@Controller('eventos')
export class EventoController {
  constructor(
    private readonly registrarEventoUseCase: RegistrarEventoUseCase,
    @Inject('EventoRepository') // Inject repository for GET operations
    private readonly eventoRepository: EventoRepository,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Registrar un nuevo evento' })
  @ApiBody({ type: CreateEventoDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'El evento ha sido registrado exitosamente.',
    schema: { type: 'object', properties: { id: { type: 'string' } } },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos inválidos.',
  })
  async registrarEvento(
    @Body() createEventoDto: CreateEventoDto,
  ): Promise<{ id: string }> {
    const eventoId = await this.registrarEventoUseCase.execute(createEventoDto);
    return { id: eventoId };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar un evento por su ID' })
  @ApiParam({ name: 'id', description: 'ID único del evento', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Evento encontrado.',
    type: Evento, // Assuming Evento class can be used directly for Swagger schema
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Evento no encontrado.',
  })
  async buscarEventoPorId(@Param('id') id: string): Promise<Evento> {
    const evento = await this.eventoRepository.findById(id);
    if (!evento) {
      throw new NotFoundException(`Evento con ID "${id}" no encontrado.`);
    }
    return evento;
  }

  @Get()
  @ApiOperation({ summary: 'Listar eventos filtrando por tipo' })
  @ApiQuery({
    name: 'tipo',
    required: true,
    description: 'Tipo de evento a filtrar',
    example: 'VENTA',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de eventos encontrados.',
    type: [Evento], // Assuming Evento class can be used directly for Swagger schema
  })
  async listarEventosPorTipo(@Query('tipo') tipo: string): Promise<Evento[]> {
    return this.eventoRepository.findAllByTipo(tipo);
  }
}
