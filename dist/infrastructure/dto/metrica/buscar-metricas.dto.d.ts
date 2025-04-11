declare const periodosPermitidos: readonly ["dia", "semana", "mes", "trimestre"];
type Periodo = (typeof periodosPermitidos)[number];
export declare class BuscarMetricasDto {
    periodo?: Periodo;
}
export {};
