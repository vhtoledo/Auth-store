import { Router } from 'express';
import { ComisionController } from './controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';




export class ComisionRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new ComisionController();
    
    // Definir las rutas
    router.get('/', controller.getComision );
    router.post('/',[AuthMiddleware.validateJWT], controller.createComision );


    return router;
  }


}