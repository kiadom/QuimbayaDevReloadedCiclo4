import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSPORLIDER, GET_INSCRIPCIONESDELESTUDIANTE } from "../../graphql/avances/queries";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from '../../context/userContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faClipboardCheck, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../../components/Sidebar";



const IndexAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        /*const { userData } = useUser();*/
        const { estudianteInscrito } = useParams();
        const { data, error, loading } = useQuery(GET_INSCRIPCIONESDELESTUDIANTE,{
        variables:{ estudianteInscrito }
        });
        
        useEffect(() => {
            console.log("Datos obtenidos con GET_INSCRIPCIONESDELESTUDIANTE", data);
        }, [data]);

        {/*const { lider } = useParams();
        const { data2 } = useQuery(GET_PROYECTOSPORLIDER,{
        variables:{ lider }
        });
    
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSPORLIDER", data2);
        }, [data2]);

        useEffect (() => {
            if (error) {
                toast.error("Error consultando los usuarios");
            }
        }, [error]);*/}

        
    return (
        <div className="body-text">
            <Sidebar icono={faClipboardCheck} titulo ='PROYECTOS EN LOS QUE ESTOY INSCRITO'/>
            <div className="contenedor-body">
                {/*<h1> {(userData.nombre)+ " " +(userData.apellido) } </h1>*/}
                <TablaAvances listaAvances = { data }/>
            </div>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
            <h2 className='rp_titulo'>Gestion de Avances</h2>
            <h1 className = "rp_subtitulo">Proyectos En los que estoy Inscrito</h1>
            <Link to='/Avances/EntradaAvances'>
            <h1 className = "rp_subtitulo">
                <FontAwesomeIcon icon={ faArrowLeft } size="1x" color='#FFFFFF' className='cursor-pointer'/>
                <span>   Volver Menu Avances </span></h1>            
            </Link>
            <br />
                <table className="table">
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Nombre Proyecto</th>
                        
                        <th>Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    { listaAvances && 
                        listaAvances.InscripcionPorEstudiante.map((p) => {
                            return (
                                <tr key = { p.$estudianteInscrito }>
                                    <td>{ p.proyecto._id }</td>
                                    <td>{ p.proyecto.nombre }</td>
                                  
                                    <td>
                                        <button className="boton_1">
                                        <Link to = {`/avances/AvancesPorProyecto/${p.proyecto._id}` }>
                                            {/*<FontAwesomeIcon icon={faPencilAlt}/>*/}
                                            Ver Avances
                                        </Link> 
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}


export {IndexAvances};