import mongoose from "mongoose";


interface Options {
    mongoUrl: string;
    dnName: string
}

export class MongoDatabase {

    static async connect( options: Options ) {
        const { mongoUrl, dnName } = options;

        try {

            await mongoose.connect( mongoUrl, {
              dbName: dnName,
            });
      
            return true;

          } catch (error) {
              console.log('Mongo connection error');
              throw error;
          }
    }


}