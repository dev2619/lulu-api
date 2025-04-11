import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';

interface AutenticarUsuarioInput {
  email: string;
  // password?: string; // Password check logic will be added later
}

@Injectable()
export class AutenticarUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository') // Using string token for injection
    private readonly usuarioRepository: UsuarioRepository,
  ) {}

  async execute(input: AutenticarUsuarioInput): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findByEmail(input.email);

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Basic check for active user
    if (!usuario.activo) {
      throw new UnauthorizedException('Usuario inactivo');
    }

    // Password validation logic would go here in a real scenario
    // For now, we just return the user if found and active

    return usuario;
  }
}
