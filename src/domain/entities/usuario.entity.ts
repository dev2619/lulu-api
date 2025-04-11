export type RolUsuario = 'admin' | 'viewer' | 'system';

export class Usuario {
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
  }) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.email = props.email;
    this.rol = props.rol;
    this.activo = props.activo;
  }
}
