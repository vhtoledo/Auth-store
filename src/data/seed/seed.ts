import { envs } from "../../config"
import { ComisionModel, EmpleadoModel, MongoDatabase, UserModel } from "../mongoModels";
import { seedData } from "./data";



(async()=> {
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL
    })

    await main();


    await MongoDatabase.disconnect();
})();

const randomBetween0AndX = ( x: number ) => {
    return Math.floor( Math.random() * x );
}

async function main() {

    // 0. Borrar Todo
    await Promise.all([ 
        UserModel.deleteMany(),
        EmpleadoModel.deleteMany(),
        ComisionModel.deleteMany(),
    ])

    // 1. Crear Usuarios
    const users = await UserModel.insertMany( seedData.users );

    // 2. Crear Comisiones
    const comisiones = await ComisionModel.insertMany(
        seedData.comisiones.map( comision => {

            return {
                ...comision,
                user: users[0]._id
            }
        })
    )

    // 3. Crear Empleado
    const empleado = await EmpleadoModel.insertMany(
        seedData.empleados.map(empleado => {

            return {
                ...empleado,
                user: users[ randomBetween0AndX( seedData.users.length -1 ) ]._id,
                comision: comisiones[ randomBetween0AndX( seedData.comisiones.length - 1 ) ]._id
            }
        })
    )

    console.log('SEEDED');

}