import mongoose, { Schema } from 'mongoose';


const empleadoSchema = new mongoose.Schema( {

  nombre: {
    type: String,
    required: [ true, 'Nombre es requerido' ]
  },
  apellido: {
    type: String,
    required: [ true, 'Apellido es requerido' ]
  },
  dni: {
    type: Number,
    required: [true, 'Dni es requerido'],
    unique: true
  },
  cuil: {
    type: Number,
    required: [true, 'Cuil es requerido']
  },
  fechaNacimiento: {
    type: Date,
    required: [true, 'Fecha de Nacimiento es requerida']
  },
  numAfiliado: {
    type: Number,
    required: [true, 'El Número de afiliado es requerido']
  },
  direccion: {
    type: String,
    required: [ true, 'La dirección es requerida' ]
  },
  localidad: {
    type: String,
    required: [ true, 'La Localidad es requerida' ]
  },
  codigoPostal: {
    type: Number,
    required: [ true, 'El Codigo postal es requerido' ]
  },
  telefono: {
    type: Number,
  },
  celular: {
    type: Number,
    required: [true, 'El Número de celular es requerido']
  },
  email: {
    type: String,
    required: [ true, 'Email is required' ],
    unique: true,
  },
  img: {
    type: String,
  },
  categoria: {
    type: Number,
    required: [ true, 'La Categoria es requerida' ]
  },
  fechaIngreso: {
    type: Date,
    required: [ true, 'El Fecha de ingreso es requerido' ]
  },
  estado: {
    type: Boolean,
    default: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

}, {timestamps:true}, );


export const EmpleadoModel = mongoose.model('Empleado', empleadoSchema);