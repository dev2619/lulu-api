import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsIn } from 'class-validator';

const periodosPermitidos = ['dia', 'semana', 'mes', 'trimestre'] as const;
type Periodo = (typeof periodosPermitidos)[number];

export class BuscarMetricasDto {
  @ApiPropertyOptional({
    example: 'mes',
    description: 'Periodo para filtrar las métricas (opcional)',
    enum: periodosPermitidos,
  })
  @IsOptional()
  @IsString()
  @IsIn(periodosPermitidos)
  periodo?: Periodo;

  // Add other potential query parameters here if needed, e.g., nombre
  // @ApiPropertyOptional({ example: 'ventas_diarias' })
  // @IsOptional()
  // @IsString()
  // nombre?: string;
}
