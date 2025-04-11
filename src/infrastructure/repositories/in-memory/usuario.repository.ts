import { Injectable } from '@nestjs/common';
import { Usuario } from '../../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../../domain/repositories/usuario.repository';

@Injectable()
export class InMemoryUsuarioRepository implements UsuarioRepository {
  private readonly usuarios = new Map<string, Usuario>();

  async findById(id: string): Promise<Usuario | null> {
    const usuario = this.usuarios.get(id);
    return Promise.resolve(usuario ? { ...usuario } : null); // Return a copy wrapped in Promise
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    for (const usuario of this.usuarios.values()) {
      if (usuario.email === email) {
        return Promise.resolve({ ...usuario }); // Return a copy wrapped in Promise
      }
    }
    return Promise.resolve(null);
  }

  async save(usuario: Usuario): Promise<void> {
    // Create a copy to store, ensuring immutability of the original object
    const usuarioToStore = new Usuario({ ...usuario });
    this.usuarios.set(usuarioToStore.id, usuarioToStore);
    return Promise.resolve();
  }

  async delete(id: string): Promise<void> {
    this.usuarios.delete(id);
    return Promise.resolve();
  }

  // Helper method for testing or seeding
  clear(): void {
    this.usuarios.clear();
  }
}
