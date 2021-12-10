import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../hooks/useFormData";

import { GET_PROYECTOS } from '../graphql/proyectos/queries';
import { CREAR_PROYECTO } from "../graphql/proyectos/mutations";
import {Enum_EstadoProyecto, Enum_FaseProyecto} from '../utils/enums'

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectos () {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Listado de Proyectos' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data. loadingData PERMITE CONTROLAR CUANDO SE CARGA EL QUERY  */
    const { data, loading } = useQuery(GET_PROYECTOS);
    
    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Proyecto" Y MOSTRARÁ LA INTERFAZ TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Proyecto');
        }
        else {
            setTextoBoton('Regresar al Listado de Proyectos');
        }
    },[mostrarTabla]);

    /* SI loading ES FALSO, ES DECIR SI YA NO ESTÁ CARGANDO, SE RENDERIZA LA INTERFAZ TablaProyectos
    EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO */
    if (!loading){
        return (
            <div className = "body-text">
    
                <button onClick = {() => {
                    setMostrarTabla (!mostrarTabla);
                    }}
                >{ textoBoton }</button>
                 { mostrarTabla ? (<TablaProyectos listaProyectos = { data }/>) : (<FormularioRegistroProyectos />)}
    
            </div>
        );
    }        

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE PROYECTOS */
const TablaProyectos = ({ listaProyectos }) => {
    return (
        <div>
            <h1>Lista de Proyectos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Objetivo General</th>
                        <th>Objetivos Especificos</th>
                        <th>Presupuesto</th>
                        <th>Fecha de Inicio</th>
                        <th>Fecha de Terminacion</th>
                        <th>Identificacion Lider</th>
                        <th>Nombre Lider</th>
                        <th>Estado</th>
                        <th>Fase</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { listaProyectos && 
                        listaProyectos.Proyectos.map((p) => {
                            return (
                                <tr key = { p._id }>
                                    <td>{ p.nombre }</td>
                                    <td>{ p.objetivo[0].descripcion }</td>
                                    <td>{ p.objetivo[1].descripcion } <p/> { p.objetivo[2].descripcion }</td>
                                    <td>{ p.presupuesto }</td>
                                    <td>{ p.fechaInicio }</td>
                                    <td>{ p.fechaFin }</td>
                                    <td>{ p.lider.identificacion }</td>
                                    <td>{ p.lider.nombre }</td>
                                    <td>{Enum_EstadoProyecto[p.estado]}</td>
                                    <td>{Enum_FaseProyecto[p.fase]}</td>
                                    <td>
                                        <Link to = {`/GestionProyectos/Editar/${ p._id }`}>
                                            <button onClick={() => {}}> Actualizar </button>
                                        </Link>
                                        <Link to = {``}>
                                            <button onClick={() => {}}> Inscribirse </button>
                                        </Link>
                                        
                                            {/*<CrearInscripcion  idProyecto={p._id}/>*/}
                                        
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroProyectos = ()=> {

    const { form, formData, updateFormData } = useFormData();
    const [crearProyecto ] = useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        crearProyecto({ 
            variables: {formData, presupuesto: parseFloat(formData.presupuesto), fechaInicio: Date("2021-12-10")} 
        });
    };

    console.log(Date.now());
    
    return (
        <div>
            <h1>Ingrese el Proyecto</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                <table>
                    <tr>
                        <td>
                            <p>Nombre: </p>
                        </td>
                        <td>
                            <input 
                                name = 'nombre' 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <p>Objetivo General: </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivo_general' 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivos Especificos: </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivos_especificos' 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr> */}
                    <tr>
                        <td>
                            <p>Presupuesto: </p>
                        </td>
                        <td>
                            <input 
                                name = 'presupuesto' 
                                type = "number" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type = "submit" 
                                value = "Registrar Proyecto" 
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
};

export { GestionProyectos };
