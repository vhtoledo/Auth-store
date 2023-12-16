import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { EmpleadoRoutes } from './empleado/routes';
import { ComisionRoutes } from './comision/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/empleado', EmpleadoRoutes.routes);
    router.use('/api/comision', ComisionRoutes.routes);



    return router;
  }


}

