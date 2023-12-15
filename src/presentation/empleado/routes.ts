import { Router } from 'express';
import { EmpleadoController } from './controller';




export class EmpleadoRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new EmpleadoController();
    
    // Definir las rutas
    router.get('/', controller.getEmpleado);
    router.post('/', controller.createEmpleado);


    return router;
  }


}

