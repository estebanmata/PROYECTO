const {Schema, model} = require("mongoose");

//Se define el esquema de usuario
const UsuarioSchema = new Schema(
    {
       numUsuario:{
           type: Number,
           unique: true,
           required: true
       },
       nomUsuario: String,
       apellidos: String,
       correo: String,
       fechaNacimiento: String,
       direccion: String,
       telefono: Number,
       tipoUsuario: String,
       ubicacion: String,
       rol: String,
       contrasenna: String,
    },
        {timestamps: true}// Fecha de creacion y modificacion
);
//Creacion del modelo que van a estar relacionado a la coleccion de Facturas
const UsuarioModel = model("Usuarios", UsuarioSchema);

//Hacemos visible el modelo con el module exports
module.exports = UsuarioModel;


//


//

//


//

//