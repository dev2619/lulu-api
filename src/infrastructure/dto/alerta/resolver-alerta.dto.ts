import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ResolverAlertaDto {
  @ApiProperty({
    example: 'UsuarioAdmin',
    description: 'Identificador del usuario o sistema que resuelve la alerta',
  })
  @IsString()
  @IsNotEmpty()
  resueltaPor: string;
}
