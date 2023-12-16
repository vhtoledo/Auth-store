import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { CreateEmpleadoDto } from '../../domain/dtos/empleado/create-empleado.dto';
import { EmpleadoService } from '../services/empleado.service';


export class EmpleadoController {

    // DI
    constructor(
      private readonly empleadoService: EmpleadoService,
    ) {}


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
        
        this.empleadoService.createEmpleado(createEmpleadoDto!, req.body.user)
          .then( empleado => res.status(201).json( empleado ))
          .catch( error => this.handleError( error, res ));
    }

    getEmpleado = async(req: Request, res: Response) => {

        res.json('Obtener Empleado')
    }
}