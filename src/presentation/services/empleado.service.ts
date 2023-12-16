import { EmpleadoModel } from "../../data";
import { CreateEmpleadoDto, CustomError, PaginationDto, UserEntity } from "../../domain";



export class EmpleadoService {

    // DI
    constructor() {}

    async createEmpleado( createEmpleadoDto: CreateEmpleadoDto, user: UserEntity) {

        const empleadoExists = await EmpleadoModel.findOne({ dni: createEmpleadoDto.dni });
        if ( empleadoExists ) throw CustomError.badRequest('Empleado ya existe');

        try {

          const empleado = new EmpleadoModel({
            ...createEmpleadoDto,
            user: user.id
          })

          await empleado.save();

          return {
            id: empleado.id,
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            dni: empleado.dni,
            cuil: empleado.cuil,
            fechaNacimiento: empleado.fechaNacimiento,
            numAfiliado: empleado.numAfiliado,
            direccion: empleado.direccion,
            localidad: empleado.localidad,
            codigoPostal: empleado.codigoPostal,
            telefono: empleado.telefono,
            celular: empleado.celular,
            email: empleado.email,
            img: empleado.img,
            categoria: empleado.categoria,
            fechaIngreso: empleado.fechaIngreso,
            estado: empleado.estado
          }
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`)
        }
    }

    async getEmpleado(paginationDto: PaginationDto) {

        const { page, limit } = paginationDto;

        try {

          //const total = await EmpleadoModel.countDocuments();
          //const empleados = await EmpleadoModel.find()
          //  .skip( (page - 1) * limit ) 
          //  .limit( limit )

          const [total, empleados] = await Promise.all([
            EmpleadoModel.countDocuments(),
            EmpleadoModel.find()
              .skip( (page - 1) * limit )
              .limit( limit )
          ])

          return {

            page: page,
            limit: limit,
            total: total,
            next: `/api/empleados?page=${ ( page + 1 ) }&limit=${ limit }`,
            prev: (page - 1 > 0) ? `/api/empleados?page=${ ( page - 1 ) }&limit=${ limit }`: null,

            empleados: empleados.map( empleado => ({
              nombre: empleado.nombre,
              apellido: empleado.apellido,
              dni: empleado.dni,
              cuil: empleado.cuil,
              fechaNacimiento: empleado.fechaNacimiento,
              numAfiliado: empleado.numAfiliado,
              direccion: empleado.direccion,
              localidad: empleado.localidad,
              codigoPostal: empleado.codigoPostal,
              telefono: empleado.telefono,
              celular: empleado.celular,
              email: empleado.email,
              img: empleado.img,
              categoria: empleado.categoria,
              fechaIngreso: empleado.fechaIngreso,
              estado: empleado.estado
            }))
            
          } 
            
        } catch (error) {
            throw CustomError.internalServer('Internal Server Error')
        }
    }
}