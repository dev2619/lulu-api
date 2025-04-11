export class Evento {
  readonly id: string;
  readonly tipo: string; // ej: 'VENTA', 'LOGISTICA', 'ERROR'
  readonly payload: Record<string, any>; // objeto JSON dinámico
  readonly timestamp: Date; // fecha de ocurrencia
  readonly fuente: string; // nombre del sistema de origen

  constructor(props: {
    id: string;
    tipo: string;
    payload: Record<string, any>;
    timestamp: Date;
    fuente: string;
  }) {
    this.id = props.id;
    this.tipo = props.tipo;
    this.payload = props.payload;
    this.timestamp = props.timestamp;
    this.fuente = props.fuente;
  }
}
