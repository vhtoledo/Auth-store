import { Response, Request } from "express";
import { CreateComisionDto, CustomError, PaginationDto } from "../../domain";
import { ComisionService } from "../services/comision.Service";



export class ComisionController {

    // DI
    constructor(
      private readonly comisionService: ComisionService,
    ) {}


    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      }
    
    createComision = async(req: Request, res: Response) => {

        const [error, createComisionDto] = CreateComisionDto.create( req.body );
        if ( error ) return res.status(400).json({ error });
        
        this.comisionService.createEmpleado(createComisionDto!)
          .then( comision => res.status(201).json( comision ))
          .catch( error => this.handleError( error, res ));
    }

    getComision = async(req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [ error, paginationDto ] = PaginationDto.create( +page, +limit );
        if ( error ) return res.status(400).json({ error });

        this.comisionService.getComision( paginationDto! )
          .then( comisiones => res.json( comisiones ))
          .catch( error => this.handleError(error, res));
    };
}