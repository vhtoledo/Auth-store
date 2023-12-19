import { bcryptAdapter } from '../../config';



export const seedData = {

  users: [
    { name: 'Test 1', email: 'test1@google.com', password: bcryptAdapter.hash( '123456') },
  ],

  comisiones: [
    { name: 'Driven' },
  ],

  empleados: [
    { name: 'Than', available: true, price: 75.0369, descripcion: 'daughter me move thumb claws lose supper strip animal teach additional definition why pitch help thus boy like every mud month are account dozen' },

  ]



}