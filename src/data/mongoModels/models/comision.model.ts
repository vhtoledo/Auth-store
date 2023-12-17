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

comisionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function( doc, ret, options ) {
    delete ret.id
  },
});


export const ComisionModel = mongoose.model('Comision', comisionSchema);