import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { CreateEmpleadoDto } from '../../domain/dtos/empleado/create-empleado.dto';


export class EmpleadoController {

    // DI
    constructor() {}


    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      }
    
    createEmpleado = async(req: Request, res: Response) => {

        const [error, createEmpleadoDto] = CreateEmpleadoDto.create( req.body );
        if ( error ) return res.status(400).json({ error });
        
        res.json(createEmpleadoDto);
    }

    getEmpleado = async(req: Request, res: Response) => {

        res.json('Obtener Empleado')
    }
}