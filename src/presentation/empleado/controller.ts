import { Response, Request } from "express";
import { CustomError } from "../../domain";


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

        res.json('Create Empleado')
    }

    getEmpleado = async(req: Request, res: Response) => {

        res.json('Obtener Empleado')
    }
}