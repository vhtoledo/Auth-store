

export class FileUploadService {

    constructor() {}

    private checkFolder( folderPath: string ) {
        throw new Error('Not Implementd');
    }

    uploadSingle(
        file: any,
        folder: string = 'uploads',
        validEntensions: string[] = ['png','jpg','jpeg','pdf']
    ) {}

    uploadMultiple(
        file: any[],
        folder: string = 'uploads',
        validEntensions: string[] = ['png','jpg','jpeg','pdf']
    ) {}
}