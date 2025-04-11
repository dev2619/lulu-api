import { Usuario } from '../../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../../domain/repositories/usuario.repository';
export declare class InMemoryUsuarioRepository implements UsuarioRepository {
    private readonly usuarios;
    findById(id: string): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    save(usuario: Usuario): Promise<void>;
    delete(id: string): Promise<void>;
    clear(): void;
}
