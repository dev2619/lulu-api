import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Inject,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiProperty, // Import ApiProperty
} from '@nestjs/swagger';
import { GenerarAlertaUseCase } from '../../application/use-cases/generar-alerta.use-case';
import { Alerta, NivelAlerta } from '../../domain/entities/alerta.entity';
import { AlertaRepository } from '../../domain/repositories/alerta.repository';

// DTO for creating an alert
class CreateAlertaDto {
  @ApiProperty({ example: 'REGLA', description: 'Tipo de la alerta' })
  tipo: string;

  @ApiProperty({
    example: 'Umbral de temperatura excedido',
    description: 'Mensaje descriptivo de la alerta',
  })
  mensaje: string;

  @ApiProperty({
    example: 'alto',
    enum: ['bajo', 'medio', 'alto', 'crítico'],
    description: 'Nivel de severidad de la alerta',
  })
  nivel: NivelAlerta;
}

@ApiTags('Alertas')
@Controller('alertas')
export class AlertaController {
  constructor(
    private readonly generarAlertaUseCase: GenerarAlertaUseCase,
    @Inject('AlertaRepository') // Inject repository for GET/PATCH operations
    private readonly alertaRepository: AlertaRepository,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Generar una nueva alerta' })
  @ApiBody({ type: CreateAlertaDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'La alerta ha sido generada exitosamente.',
    schema: { type: 'object', properties: { id: { type: 'string' } } },
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Datos inválidos.',
  })
  async generarAlerta(
    @Body() createAlertaDto: CreateAlertaDto,
  ): Promise<{ id: string }> {
    // Here, 'creadaPor' defaults to 'sistema' within the use case
    const alertaId = await this.generarAlertaUseCase.execute(createAlertaDto);
    return { id: alertaId };
  }

  @Get('/activas')
  @ApiOperation({ summary: 'Listar todas las alertas activas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de alertas activas.',
    type: [Alerta], // Assuming Alerta class can be used for Swagger schema
  })
  async listarAlertasActivas(): Promise<Alerta[]> {
    return this.alertaRepository.findActivas();
  }

  @Patch(':id/resolver')
  @HttpCode(HttpStatus.OK) // Or HttpStatus.NO_CONTENT if preferred
  @ApiOperation({ summary: 'Marcar una alerta como resuelta' })
  @ApiParam({ name: 'id', description: 'ID único de la alerta', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Alerta marcada como resuelta.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Alerta no encontrada.',
  })
  async resolverAlerta(@Param('id') id: string): Promise<void> {
    // We might want to check if the alert exists first, but the repo handles non-existence gracefully
    await this.alertaRepository.markAsResolved(id);
    // Optionally, check if the alert was actually found and updated if needed
  }
}
