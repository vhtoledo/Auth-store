import { Response, Request } from "express";
import { CustomError, PaginationDto } from "../../domain";



export class ComisionController {

    // DI
    constructor(
      //private readonly comisionService: ComisionService,
    ) {}


    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      }
    
    createComision = async(req: Request, res: Response) => {


        return res.json('Post Comision')
        //const [error, createEmpleadoDto] = CreateEmpleadoDto.create( req.body );
        //if ( error ) return res.status(400).json({ error });
        //
        //this.empleadoService.createEmpleado(createEmpleadoDto!, req.body.user)
        //  .then( empleado => res.status(201).json( empleado ))
        //  .catch( error => this.handleError( error, res ));
    }

    getComision = async(req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [ error, paginationDto ] = PaginationDto.create( +page, +limit );
        if ( error ) return res.status(400).json({ error });

        return res.json('Get Comision')

        //this.empleadoService.getEmpleado( paginationDto! )
        //  .then( empleados => res.json( empleados ))
        //  .catch( error => this.handleError(error, res));
    };
}