export declare class Metrica {
    readonly id: string;
    readonly nombre: string;
    readonly valor: number;
    readonly unidad: string;
    readonly periodo: string;
    readonly calculadaEn: Date;
    constructor(props: {
        id: string;
        nombre: string;
        valor: number;
        unidad: string;
        periodo: string;
        calculadaEn: Date;
    });
}
