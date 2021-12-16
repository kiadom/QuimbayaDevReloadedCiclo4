import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSPORLIDER, GET_INSCRIPCIONESDELESTUDIANTE } from "../../graphql/avances/queries";
import { useParams, Link } from "react-router-dom";
import { useUser } from '../../context/userContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";


//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUsersCog, faPencilAlt,faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";

const IndexAvancesLider = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        /*const { userData } = useUser();*/
        const { lider } = useParams();
        const { data } = useQuery(GET_PROYECTOSPORLIDER,{
        variables:{ lider }
        });
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSPORLIDER", data);
        }, [data]);

        {/*
        const { $estudianteInscrito } = useParams();
        const { data2, error, loading } = useQuery(GET_INSCRIPCIONESDELESTUDIANTE,{
        variables:{ $estudianteInscrito }
        });
        useEffect(() => {
            console.log("Datos obtenidos con GET_INSCRIPCIONESDELESTUDIANTE", data2);
        }, [data2]);
        */}  
        
    

    return (
        <div className="body-text">
            
            <TablaAvances listaAvances2 = { data }/>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
const TablaAvances = ({ listaAvances2 }) => {
    return (
        <div>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Gestion de Avances</h1>
            <h1 className = "rp_subtitulo">Lista de Proyectos Liderados</h1>
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
                    { listaAvances2 && 
                        listaAvances2.ProyectosPorLider.map((p) => {
                            return (
                                <tr key = { p.$lider }>
                                    <td>{ p._id }</td>
                                    <td>{ p.nombre }</td>
                                    
                                    <td>
                                        <button className="boton_1">
                                        <Link to = {`/avances/AvancesPorProyecto/${p._id}` }>
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


export {IndexAvancesLider};