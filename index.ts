
import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";
import { InscriptionModel } from "./models/inscription";
import { AdvanceModel } from "./models/advance";

import { Enum_EstadoInscripcion, Enum_EstadoProyecto, Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo, Enum_FaseProyecto } from "./models/enums";

//const crearProyectoConObjetivos = async ()=> {
//esta funcion no tiene nada
//};

const main = async ()=> {
    await conectarBD();

    // Creaciones de registros en las colecciones de la BD:
    //const usuario1 = await UserModel.create({
    //    correo: "pacheco.rocio@gmail.com",
    //    identificacion: "123987",
    //    nombre: "Rocio",
    //    apellido: "Pacheco",
    //    rol: Enum_Rol.administrador,
    //    estado: Enum_EstadoUsuario.autorizado,
    //});
//
    //const usuario2 = await UserModel.create({
    //    correo: "correolider@gmail.com",
    //    identificacion: "987321",
    //    nombre: "Usuario",
    //    apellido: "Lider",
    //    rol: Enum_Rol.lider,
    //    estado: Enum_EstadoUsuario.autorizado,
    //});
//
    //const usuario3 = await UserModel.create({
    //    correo: "correoestudiante@gmail.com",
    //    identificacion: "789321",
    //    nombre: "Usuario",
    //    apellido: "Estudiante",
    //    rol: Enum_Rol.estudiante,
    //    estado: Enum_EstadoUsuario.autorizado,
    //});
    //
    //const proyecto1 = await ProjectModel.create ({
    //    nombre: "Proyecto1Rocio",
    //    presupuesto: 10000,
    //    fechaInicio: new Date("2022/11/10"),
    //    fechaFin: new Date("2022/12/31"),
    //    lider: usuario2._id ,
    //    //objetivos: [ objectivoGeneral._id, objectivoEspecifico1._id, objectivoEspecifico2._id ],
    //    //La linea de arriba no va xq la relación se hizo de muchos a uno
    //});
//
    //const objectivoGeneral = await ObjectiveModel.create ({
    //    descripcion: "Objetivo General 1",
    //    tipo: Enum_TipoObjetivo.general ,
    //    proyecto: proyecto1._id,
    //});
//
    //const objectivoEspecifico1 = await ObjectiveModel.create ({
    //    descripcion: "Objetivo Específico 1",
    //    tipo: Enum_TipoObjetivo.especifico ,
    //    proyecto: proyecto1._id,
    //});
//
    //const objectivoEspecifico2 = await ObjectiveModel.create ({
    //    descripcion: "Objetivo Específico 2",
    //    tipo: Enum_TipoObjetivo.especifico ,
    //    proyecto: proyecto1._id,
    //});
//
    //const inscripcion1 = await InscriptionModel.create ({
    //    fecha_ingreso: new Date("2022/11/13"),
    //    fecha_engreso:new Date("2022/12/31"),
    //    estadoInscripcion: Enum_EstadoInscripcion.pendiente,
    //    proyecto: proyecto1._id,
    //    estudianteInscrito: usuario3._id,
    //});
//
    //const avance1 = await AdvanceModel.create ({
    //    fechaAvance: Date.now(),
    //    descripcion: "Este es el reporte de avances #1",
    //    observaciones: ["Primeras observaciones del lider del proyecto"],
    //    proyecto: proyecto1._id, 
    //    creadoPor: usuario3._id,
    //});

    // Modificaciones a la BD:
    // Modificación de usuario:
    await UserModel.findOneAndUpdate({correo:"correolider@gmail.com"},
        {nombre:"Juan", apellido:"Perez"})
        .then((u)=>{console.log("Nombre y Apellido Actualizados", u);})
        .catch((e)=> {console.error("Error actualizando el Nombre",e);});

    // Modificación estado inscripción:
    // OJO, SE ESTA LLAMANDO MAL EL ESTUDIANTE INSCRITO PORQUE SE ESTA LLAMANDO COMO STRING Y NO DEBE SER ASÍ.
    await InscriptionModel.findOneAndUpdate ({_id:"61929c8c094d36962e6509b3"}, 
        {estadoInscripcion:Enum_EstadoInscripcion.aceptada})
        .then((u)=>{console.log("Estado de inscripción Actualizado", u);})
        .catch((e)=> {console.error("Error actualizando el Estado de inscripción",e);});

    // Otras Consultas a la BD
    //const proyecto = await ProjectModel.findOne({_id: "61929c8c094d36962e6509ab" })
    //const objetivos = await ObjectiveModel.find({project: "61929c8c094d36962e6509ab" })
    //const inscripcion = await InscriptionModel.findOne({_id: "61929c8c094d36962e6509b3"})
    //const usuario = await UserModel.findOne({_id: "61929c8b094d36962e6509a6" })
    //console.log("El proyecto consultado es: ", proyecto);        
    //console.log("Los objetivos del proyecto son: ", objetivos);
    //console.log("La inscripción consultada es: ", inscripcion);
    //console.log("El usuario modificado es: ", usuario);
    
    
    
};
main();


//1. Ejemplo de crear un usuario (se creo desde aqui como ejemplo 
    //y se vio que se concto a la BD y se creo el usuario en mongo)
    //esto es antes de crear la interface User
    //await UserModel.create({
    //    correo:"pacheco.rocio@gmail.comidalistaa",
    //    identificacion:"12345678",
    //    nombre:"Ingrid Rocio",
    //    apellido:"Pacheco",
    //    rol:Enum_Rol.administrador,
    //})
    //.then((u)=>{
    //    console.log("Usuario Creado", u);
    //})
    //.catch((e)=> {
    //    console.error("Error crando el Usuario",e);
    //});
    
    //2. Ejemplo de obtener los usuarios (se obtienen desde aqui como ejemplo 
    //y se vio que se conecto a la BD y se tajeron los usuarios en mongo)
    //await UserModel.find({nombre:"Sara", apellido:"Maya"}) //si x ejm hubieran dos Saras se filtra tmbn x apellido ejm
    //.then((u)=>{
    //    console.log("Se buscaron los usuarios en la colección", u);
    //})
    //.catch((e)=> {
    //    console.error("Error obteniendo los Usuarios",e);
    //});

    //3. Ejemplo de crear un usuario después de haber creado la interface User y usar Typescript:
    //await UserModel.create({
    //    correo: "pacheco.rocio@gmail.com",
    //    identificacion: "123987",
    //    nombre: "Rocio",
    //    apellido: "Pacheco",
    //    rol: Enum_Rol.administrador
    //})
    //.then((u)=>{
    //    console.log("Usuario Creado", u);
    //})
    //.catch((e)=> {
    //    console.error("Error crando el Usuario",e);
    //});

    //4. Eliminar el then y el catch para que no se hagan carreras de cumplimiento de promises:
    //const usuario = await UserModel.create({
    //    correo:"otrousuariodeRocio@gmail.com",
    //    identificacion:"1234987",
    //    nombre:"otrousuario",
    //    apellido:"deRocio",
    //    rol: Enum_Rol.estudiante
    //})

    //5. Ejemplo de obtener los usuarios QUITANDO EL THEN Y CATCH: OJO NO FUNCIONO
    //y se vio que se conecto a la BD y se tajeron los usuarios en mongo)
    //const usuario = await UserModel.find()

    // 6. Editar un usuario:
    //await UserModel.findOneAndUpdate(
    //    {correo:"pacheco.rocio@gmail.com"},
    //{
    //    nombre:"Ingrid R.",
    //    
    //    }).then((u)=>{
    //      console.log("Usuario Actualizado", u);
    //    })
    //    .catch((e)=> {
    //      console.error("Error actualizando el Usuario",e);
    //    });


    // 7. Eliminar un usuario:
    //await UserModel.findOneAndDelete(
    //    {identificacion:"123987"}
    //).then((u)=>{
    //    console.log("Usuario Borrado", u);
    //})
    //.catch((e)=> {
    //    console.error("Error actualizando el Usuario",e);
    //});

    // 8. Crear un proyecto:
    //ProjectModel.create ({
    //    nombre: "ProyectoRocio3",
    //    presupuesto: 1000,
    //    fechaInicio: Date.now(),
    //    fechaFin: new Date("2022/12/31"),
    //    lider:"618dcf6363a5b57eed9471a6",
    //    objetivos: [ "61915459b4e55f504e93436b","6191563de868fa98bd34f921" ],
    //    //estado: Enum_EstadoProyecto,
    //    //fase: Enum_FaseProyecto,
    //});

    // 9. Consultar un proyecto
    //const proyecto = await ProjectModel.find({ nombre: "ProyectoRocio3"})
    //    .populate("objetivos")
    //    .populate("lider");
    //console.log("El proyecto es: ", proyecto);

    // 10. Crear objetivo
    //const object = await ObjectiveModel.create({
    //    descripcion: "Objetivo especifico 2",
    //    tipo: Enum_TipoObjetivo.especifico,
    //});

    
    

    
    