export type NivelAlerta = 'bajo' | 'medio' | 'alto' | 'crítico';
export type CreadorAlerta = 'sistema' | 'usuario';
export type EstadoAlerta = 'activa' | 'resuelta';
export declare class Alerta {
    readonly id: string;
    readonly tipo: string;
    readonly mensaje: string;
    readonly nivel: NivelAlerta;
    readonly creadaPor: CreadorAlerta;
    readonly timestamp: Date;
    readonly estado: EstadoAlerta;
    constructor(props: {
        id: string;
        tipo: string;
        mensaje: string;
        nivel: NivelAlerta;
        creadaPor: CreadorAlerta;
        timestamp: Date;
        estado: EstadoAlerta;
    });
}
