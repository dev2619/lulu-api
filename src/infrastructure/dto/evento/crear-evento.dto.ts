import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsISO8601 } from 'class-validator';

export class CrearEventoDto {
  @ApiProperty({ example: 'VENTA', description: 'Tipo del evento' })
  @IsString()
  @IsNotEmpty()
  tipo: string;

  @ApiPropertyOptional({
    example: { productoId: 123, cantidad: 2 },
    description: 'Payload JSON opcional del evento',
  })
  @IsOptional()
  datos?: any; // Using 'any' as specified, consider a more specific type if possible

  @ApiProperty({
    example: '2024-04-10T10:00:00Z',
    description: 'Timestamp del evento en formato ISO8601',
  })
  @IsISO8601()
  @IsNotEmpty() // Ensure timestamp is provided
  timestamp: string;

  // Note: 'fuente' was in the previous inline DTO but not in the requirements here.
  // Add it if needed.
  // @ApiProperty({ example: 'sistema-facturacion', description: 'Fuente del evento' })
  // @IsString()
  // @IsNotEmpty()
  // fuente: string;
}
