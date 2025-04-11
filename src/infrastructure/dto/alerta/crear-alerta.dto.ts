import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CrearAlertaDto {
  @ApiProperty({ example: 'REGLA', description: 'Tipo de la alerta' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiProperty({
    example: 'Umbral de temperatura excedido en sensor T-123',
    description: 'Descripción detallada de la alerta',
  })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    description: 'ID del evento relacionado (formato UUID)',
  })
  @IsUUID()
  @IsNotEmpty()
  eventoId: string;

  // Note: 'nivel' and 'creadaPor' were in the previous inline DTO but not in the requirements here.
  // Add them if needed based on how GenerarAlertaUseCase is called.
}
