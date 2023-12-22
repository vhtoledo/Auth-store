import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { FileUploadService } from "../services/file-upload.service";
import { UploadedFile } from "express-fileupload";



export class FileUploadController {

    // DI
    constructor(
      private readonly fileUploadService: FileUploadService,
    ) {}


    private handleError = (error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    
        console.log(`${ error }`);
        return res.status(500).json({ error: 'Internal server error' })
      }
    
    uploadFile = async(req: Request, res: Response) => {

      const type = req.params.type;
      const validTypes = ['users', 'empleados'];
      if ( !validTypes.includes(type) ) {
        return res.status(400)
          .json({ error: `Invalid Type: ${type}, valid ones ${validTypes}`})
      }

      const file = req.body.files.at(0) as UploadedFile;

      this.fileUploadService.uploadSingle( file, `uploads/${type}` )
        .then( uploaded => res.json(uploaded) )
        .catch( error => this.handleError( error, res ))
    };

    uploadMultipleFile = async(req: Request, res: Response) => {

      res.json('uploadMultipleFiles');
  }
}