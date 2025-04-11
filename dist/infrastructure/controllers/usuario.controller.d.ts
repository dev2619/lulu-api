import { AutenticarUsuarioUseCase } from '../../application/use-cases/autenticar-usuario.use-case';
import { Usuario } from '../../domain/entities/usuario.entity';
import { UsuarioRepository } from '../../domain/repositories/usuario.repository';
declare class LoginDto {
    email: string;
}
declare class UsuarioResponseDto {
    id: string;
    nombre: string;
    email: string;
    rol: string;
    activo: boolean;
    constructor(usuario: Usuario);
}
export declare class UsuarioController {
    private readonly autenticarUsuarioUseCase;
    private readonly usuarioRepository;
    constructor(autenticarUsuarioUseCase: AutenticarUsuarioUseCase, usuarioRepository: UsuarioRepository);
    login(loginDto: LoginDto): Promise<UsuarioResponseDto>;
    obtenerUsuarioPorId(id: string): Promise<UsuarioResponseDto>;
}
export {};
