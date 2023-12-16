import { ComisionModel } from "../../data";
import { CreateComisionDto, CustomError, PaginationDto } from "../../domain";



export class ComisionService {

    // DI
    constructor() {}

    async createEmpleado( createComisionDto: CreateComisionDto ) {

        const comisionExists = await ComisionModel.findOne({ dni: createComisionDto.empleado });
        if ( comisionExists ) throw CustomError.badRequest('Comision ya existe');

        try {

          const comision = new ComisionModel({
            ...createComisionDto,
          })

          await comision.save();

          return comision;
            
        } catch (error) {
            throw CustomError.internalServer(`${ error }`)
        }
    }

    async getComision(paginationDto: PaginationDto) {

        const { page, limit } = paginationDto;

        try {

          const [total, comisiones] = await Promise.all([
            ComisionModel.countDocuments(),
            ComisionModel.find()
              .skip( (page - 1) * limit )
              .limit( limit )
              // todo: populate
          ])

          return {

            page: page,
            limit: limit,
            total: total,
            next: `/api/comision?page=${ ( page + 1 ) }&limit=${ limit }`,
            prev: (page - 1 > 0) ? `/api/comision?page=${ ( page - 1 ) }&limit=${ limit }`: null,

            comisiones: comisiones, 
          }; 
            
        } catch (error) {
            throw CustomError.internalServer('Internal Server Error')
        }
    }
}