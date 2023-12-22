import { Router } from 'express';
import { AuthRoutes } from './auth/routes';
import { EmpleadoRoutes } from './empleado/routes';
import { ComisionRoutes } from './comision/routes';
import { FileUploadRoutes } from './file-upload/routes';
import { ImageRoutes } from './images/routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/auth', AuthRoutes.routes);
    router.use('/api/empleado', EmpleadoRoutes.routes);
    router.use('/api/comision', ComisionRoutes.routes);
    router.use('/api/upload', FileUploadRoutes.routes);
    router.use('/api/images', ImageRoutes.routes);



    return router;
  }


}

