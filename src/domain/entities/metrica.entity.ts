export class Metrica {
  readonly id: string;
  readonly nombre: string; // ej: 'ventas_diarias'
  readonly valor: number;
  readonly unidad: string; // ej: 'USD', 'tickets', '%'
  readonly periodo: string; // ej: '2024-04-10', 'Q1-2024'
  readonly calculadaEn: Date; // fecha en que se generó

  constructor(props: {
    id: string;
    nombre: string;
    valor: number;
    unidad: string;
    periodo: string;
    calculadaEn: Date;
  }) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.valor = props.valor;
    this.unidad = props.unidad;
    this.periodo = props.periodo;
    this.calculadaEn = props.calculadaEn;
  }
}
