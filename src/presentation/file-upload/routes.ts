import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { FileUploadController } from './controller';
import { FileUploadService } from '../services/file-upload.service';




export class FileUploadRoutes {


  static get routes(): Router {

    const router = Router();
    const controller = new FileUploadController(
      new FileUploadService()
    );
    
    // Definir las rutas
    router.post('/single/:type',[AuthMiddleware.validateJWT], controller.uploadFile );
    router.post('/multiple/:type',[AuthMiddleware.validateJWT], controller.uploadMultipleFile );


    return router;
  }


}