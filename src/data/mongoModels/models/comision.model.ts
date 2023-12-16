import mongoose, { Schema } from 'mongoose';


const comisionSchema = new mongoose.Schema( {

  instrumentoLegal: {
    type: String,
    required: [ true, 'Instrumento Legal es requerido' ]
  },
  fechaSalida: {
    type: Date,
    required: [ true, 'La fecha de salida es requerida' ]
  },
  fechaRegreso: {
    type: Date,
    required: [ true, 'La fecha de regreso es requerida' ]
  },
  empleado: {
    type: Schema.Types.ObjectId,
    ref: 'Empleado',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

}, {timestamps:true}, );


export const comisionModel = mongoose.model('Comision', comisionSchema);