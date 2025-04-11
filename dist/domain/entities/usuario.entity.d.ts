export type RolUsuario = 'admin' | 'viewer' | 'system';
export declare class Usuario {
    readonly id: string;
    readonly nombre: string;
    readonly email: string;
    readonly rol: RolUsuario;
    readonly activo: boolean;
    constructor(props: {
        id: string;
        nombre: string;
        email: string;
        rol: RolUsuario;
        activo: boolean;
    });
}
