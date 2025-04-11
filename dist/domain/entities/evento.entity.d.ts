export declare class Evento {
    readonly id: string;
    readonly tipo: string;
    readonly payload: Record<string, any>;
    readonly timestamp: Date;
    readonly fuente: string;
    constructor(props: {
        id: string;
        tipo: string;
        payload: Record<string, any>;
        timestamp: Date;
        fuente: string;
    });
}
