import { Router } from 'express';
import { EmpleadoController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { EmpleadoService } from '../services/empleado.service';




export class EmpleadoRoutes {


  static get routes(): Router {

    const router = Router();
    const empleadoService = new EmpleadoService();
    const controller = new EmpleadoController(empleadoService);
    
    // Definir las rutas
    router.get('/', controller.getEmpleado);
    router.post('/',[ AuthMiddleware.validateJWT ], controller.createEmpleado);


    return router;
  }


}

