export type NivelAlerta = 'bajo' | 'medio' | 'alto' | 'crítico';
export type CreadorAlerta = 'sistema' | 'usuario';
export type EstadoAlerta = 'activa' | 'resuelta';

export class Alerta {
  readonly id: string;
  readonly tipo: string; // ej: 'REGLA', 'EVENTO', 'ERROR'
  readonly mensaje: string;
  readonly nivel: NivelAlerta;
  readonly creadaPor: CreadorAlerta;
  readonly timestamp: Date; // fecha de creación
  readonly estado: EstadoAlerta;

  constructor(props: {
    id: string;
    tipo: string;
    mensaje: string;
    nivel: NivelAlerta;
    creadaPor: CreadorAlerta;
    timestamp: Date;
    estado: EstadoAlerta;
  }) {
    this.id = props.id;
    this.tipo = props.tipo;
    this.mensaje = props.mensaje;
    this.nivel = props.nivel;
    this.creadaPor = props.creadaPor;
    this.timestamp = props.timestamp;
    this.estado = props.estado;
  }
}
