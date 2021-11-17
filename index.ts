import dotenv from 'dotenv';
import { conectarBD } from "./db/db";
import { UserModel } from "./models/user";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";
import { InscriptionModel } from "./models/inscription";
import { AdvanceModel } from "./models/advance";
import { Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo, Enum_FaseProyecto } from "./models/enums";

/** Permite usar variables de entorno, se definen en el archivo .env */
dotenv.config();

const crearRegistros = async () => {

    const usuario1 = await UserModel.create({
       correo: "ingjuanmasuarez@gmail.com",
       identificacion: "0001",
       nombre: "Juan",
       apellido: "Suarez",
       rol: Enum_Rol.administrador,
       estado: Enum_EstadoUsuario.autorizado,
    });

    const usuario2 = await UserModel.create({
       correo: "lider_juanma@gmail.com",
       identificacion: "0002",
       nombre: "Lider",
       apellido: "JuanMa",
       rol: Enum_Rol.lider,
       estado: Enum_EstadoUsuario.autorizado,
    });

    const usuario3 = await UserModel.create({
       correo: "estudiante_juanma@gmail.com",
       identificacion: "0003",
       nombre: "Estudiante",
       apellido: "JuanMa",
       rol: Enum_Rol.estudiante,
       estado: Enum_EstadoUsuario.autorizado,
    });
    
    const proyecto1 = await ProjectModel.create ({
       nombre: "Realidad Aumentada",
       presupuesto: 250000,
       fechaInicio: new Date("2022/11/17"),
       fechaFin: new Date("2022/12/31"),
       lider: usuario2._id ,
    });

    const objectivoGeneral = await ObjectiveModel.create ({
       descripcion: "Entender la diferencia entre AR y GeoAR",
       tipo: Enum_TipoObjetivo.general ,
       proyecto: proyecto1._id,
    });

    const objectivoEspecifico1 = await ObjectiveModel.create ({
       descripcion: "Interactuar con plataformas de realidad aumentada",
       tipo: Enum_TipoObjetivo.especifico ,
       proyecto: proyecto1._id,
    });

    const objectivoEspecifico2 = await ObjectiveModel.create ({
       descripcion: "Crear un proyecto de GeoAR",
       tipo: Enum_TipoObjetivo.especifico ,
       proyecto: proyecto1._id,
    });

    const inscripcion1 = await InscriptionModel.create ({
       fecha_ingreso: new Date("2022/11/17"),
       fecha_engreso:new Date("2022/12/31"),
       estadoInscripcion: Enum_EstadoInscripcion.pendiente,
       proyecto: proyecto1._id,
       estudianteInscrito: usuario3._id,
    });

    const avance1 = await AdvanceModel.create ({
       fechaAvance: Date.now(),
       descripcion: "Se crea una lista de referencias bibliograficas a consultar",
       observaciones: ["Debes consultar al menos 30 referencias bibliograficas, realiza un analisis para determinar el futuro del tema"],
       proyecto: proyecto1._id, 
       creadoPor: usuario3._id,
    });
}

const realizarConsultas = async () => {

    // Consulta usuario
    const usuario = await UserModel.findOne({_id: "6194ea557bf7c5e14050cba3" })
    console.log("El usuario consultado es: ", usuario);

    // Modificación de usuario
    await UserModel.findOneAndUpdate(
        {correo:"lider_juanma@gmail.com"},
        {
        nombre:"Manuel", apellido:"Rodriguez"
        }).then((u)=>{
            console.log("Nombre y Apellido Actualizados", u);
        })
        .catch((e)=> {
            console.error("Error actualizando el Estado de inscripción",e);
        });

    // Modificación estado inscripción
    await InscriptionModel.findOneAndUpdate(
       {_id:"6194ea567bf7c5e14050cbb4"}, 
       {
           estadoInscripcion: Enum_EstadoInscripcion.aceptada,
       }).then((u)=>{
         console.log("Estado de inscripción Actualizado", u);
       })
       .catch((e)=> {
         console.error("Error actualizando el Estado de inscripción",e);
       });

    // Buscar con una relación con populate
    const proyecto = await ProjectModel.find({
        nombre: "Realidad Aumentada"
    }).populate('lider');
    console.log('El proyecto es ', proyecto);

    // Otras Consultas a la BD
    // const proyecto = await ProjectModel.findOne({_id: "61929c8c094d36962e6509ab" })
    // const objetivos = await ObjectiveModel.find({project: "61929c8c094d36962e6509ab" })
    // const inscripcion = await InscriptionModel.findOne({_id: "61929c8c094d36962e6509b3"})
    // const usuario2 = await UserModel.findOne({_id: "61929c8b094d36962e6509a6" })
    // console.log("El proyecto consultado es: ", proyecto);        
    // console.log("Los objetivos del proyecto son: ", objetivos);
    // console.log("La inscripción consultada es: ", inscripcion);
    // console.log("El usuario modificado es: ", usuario2);
}

const main = async ()=> {
    await conectarBD();

    /** A estas lineas se les pone/quita comentario para escribir/consultar objetos en las colecciones */
    //crearRegistros();
    //realizarConsultas();
};

main();