import { Router } from 'express';
import { ComisionController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ComisionService } from '../services/comision.Service';




export class ComisionRoutes {


  static get routes(): Router {

    const router = Router();
    const comisionService = new ComisionService
    const controller = new ComisionController(comisionService);
    
    // Definir las rutas
    router.get('/', controller.getComision );
    router.post('/',[AuthMiddleware.validateJWT], controller.createComision );


    return router;
  }


}