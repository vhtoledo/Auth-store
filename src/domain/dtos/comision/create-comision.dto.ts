

export class CreateComisionDto {

    private constructor(
        public readonly instrumentoLegal: string,
        public readonly fechaSalida: Date,
        public readonly fechaRegreso: Date,
        public readonly empleado: string,
        public readonly user: string
    ){}

    static create( props: { [ key: string ]: any; }): [string?, CreateComisionDto?] {

        const {
            instrumentoLegal,
            fechaSalida,
            fechaRegreso,
            empleado,
            user
        } = props;

        if ( !instrumentoLegal ) return ['Falta Instrumento Legal'];
        if ( !fechaSalida ) return ['Falta Fecha de Salida'];
        if ( !fechaRegreso ) return ['Falta Fecha de Regreso'];
        if ( !empleado) return ['Falta el Empleado'];
        if ( !user ) return ['Falta el Usuario'];

        return [
            undefined,
            new CreateComisionDto(
                instrumentoLegal,
                fechaSalida,
                fechaRegreso,
                empleado,
                user,
            )
        ];
      
    }
}