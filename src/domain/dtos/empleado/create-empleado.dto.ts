import { regularExps } from "../../../config";


export class CreateEmpleadoDto {

    private constructor(
        public readonly nombre: string,
        public readonly apellido: string,
        public readonly dni: number,
        public readonly cuil: number,
        public readonly fechaNacimiento: Date,
        public readonly numAfiliado: number,
        public readonly direccion: string,
        public readonly localidad: string,
        public readonly codigoPostal: number,
        public readonly telefono: number,
        public readonly celular: number,
        public readonly email: string,
        public readonly categoria: number,
        public readonly fechaIngreso: Date,
        public readonly estado: boolean
    ){}

    static create( object: { [key: string]: any} ):[string?, CreateEmpleadoDto?] {

        const {nombre, apellido, dni, cuil, fechaNacimiento, numAfiliado, direccion, localidad, codigoPostal, telefono, celular, email, categoria, fechaIngreso, estado} = object;
        let estadoBoolean = estado

        if ( !nombre ) return ['Debe Ingresar Nombre'];
        if ( !apellido ) return ['Debe Ingresar Apellido'];
        if ( !dni ) return ['Debe Ingresar DNI'];
        if ( !cuil ) return ['Debe Ingresar Cuil'];
        if ( !fechaNacimiento ) return ['Debe Ingresar Fecha de Nacimiento'];
        if ( !numAfiliado ) return ['Debe Ingresar Número de Afiliado'];
        if ( !direccion ) return ['Debe Ingresar la Direccion'];
        if ( !localidad ) return ['Debe Ingresar la Localidad'];
        if ( !codigoPostal ) return ['Debe Ingresar El Código Postal'];
        if ( !telefono ) return ['Debe Ingresar el Telefono'];
        if ( !celular ) return ['Debe Ingresar el Celular'];
        if ( !email ) return ['Debe Ingresar el Email'];
        if ( !regularExps.email.test( email ) ) return ['Email is not valid'];
        if ( !categoria ) return ['Debe Ingresar la Categoria'];
        if ( !fechaIngreso ) return ['Debe Ingresar la Fecha de Ingreso'];
        if ( typeof estado !== 'boolean') {
            estadoBoolean = ( estado == 'true' )
        }

        return [undefined, new CreateEmpleadoDto(nombre, apellido, dni, cuil, fechaNacimiento, numAfiliado, direccion, localidad, codigoPostal, telefono, celular, email, categoria, fechaIngreso, estado)];

    }
}