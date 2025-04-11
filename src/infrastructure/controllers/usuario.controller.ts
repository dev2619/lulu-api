import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Inject,
  HttpStatus,
  HttpCode,
  NotFoundException,
  UnauthorizedException, // Import UnauthorizedException
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiProperty, // Import ApiProperty
} from '@nestjs/swagger';
import { AutenticarUsuarioUseCase } from '../../application/use-cases/autenticar-usuario.use-case';
import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';

// DTO for login
class LoginDto {
  @ApiProperty({
    example: 'admin@example.com',
    description: 'Email del usuario',
  })
  email: string;

  // @ApiProperty({ example: 'password123', description: 'Contraseña (opcional por ahora)' })
  // password?: string; // Password field commented out as per use case
}

// DTO for user response (excluding sensitive data like password hash if it existed)
class UsuarioResponseDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  rol: string; // Use string for simplicity in DTO
  @ApiProperty()
  activo: boolean;

  constructor(usuario: Usuario) {
    this.id = usuario.id;
    this.nombre = usuario.nombre;
    this.email = usuario.email;
    this.rol = usuario.rol;
    this.activo = usuario.activo;
  }
}

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuarioController {
  constructor(
    private readonly autenticarUsuarioUseCase: AutenticarUsuarioUseCase,
    @Inject('UsuarioRepository') // Inject repository for GET operation
    private readonly usuarioRepository: UsuarioRepository,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Autenticar un usuario (login)' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Usuario autenticado exitosamente.',
    type: UsuarioResponseDto, // Use the response DTO
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Credenciales inválidas o usuario inactivo.',
  })
  async login(@Body() loginDto: LoginDto): Promise<UsuarioResponseDto> {
    try {
      const usuario = await this.autenticarUsuarioUseCase.execute(loginDto);
      // Map entity to response DTO
      return new UsuarioResponseDto(usuario);
    } catch (error) {
      // Catch specific exceptions if needed, otherwise rethrow Unauthorized
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      // Handle other potential errors if necessary, or rethrow a generic one
      throw new UnauthorizedException('Error durante la autenticación.');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por su ID' })
  @ApiParam({ name: 'id', description: 'ID único del usuario', type: String })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Usuario encontrado.',
    type: UsuarioResponseDto, // Use the response DTO
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Usuario no encontrado.',
  })
  async obtenerUsuarioPorId(
    @Param('id') id: string,
  ): Promise<UsuarioResponseDto> {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado.`);
    }
    // Map entity to response DTO
    return new UsuarioResponseDto(usuario);
  }
}
