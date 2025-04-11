import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';
interface AutenticarUsuarioInput {
    email: string;
}
export declare class AutenticarUsuarioUseCase {
    private readonly usuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    execute(input: AutenticarUsuarioInput): Promise<Usuario>;
}
export {};
