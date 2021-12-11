import { useParams, Link } from "react-router-dom";

import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSMODAVANCE, GET_INSCRIPCIONESDELESTUDIANTE } from "../../graphql/avances/queries";

import React, { useEffect, useState } from "react";


//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUsersCog, faPencilAlt,faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";

const IndexAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        /*const { data } = useQuery(GET_PROYECTOSMODAVANCE); */
        const { estudianteInscrito } = useParams();
        const { data } = useQuery(GET_INSCRIPCIONESDELESTUDIANTE,{
        variables:{ estudianteInscrito }
        });
    
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSMODAVANCE", data);
        }, [data]);
        
    

        return (
            <div className="body-text">
                <TablaProyectos listaProyectos = { data }/>
            </div>
        );
    };
    
    /* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
    const TablaProyectos = ({ listaProyectos }) => {
        return (
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Lista de Proyectos en los que se Encuentra Inscrito</h1>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Nombre Proyecto</th>
                            <th>Accion </th>
                        </tr>
                    </thead>
                    <tbody>
                        { listaProyectos && 
                            listaProyectos.InscripcionPorEstudiante.map((p) => {
                                return (
                                    <tr key = { p.estudianteInscrito }>
                                        <td>{ p.proyecto._id }</td>
                                        <td>{ p.proyecto.nombre }</td>
                                        <td>
                                            <Link to = {`/avances/AvancesPorProyecto/${p.proyecto._id}` }>
                                                {/*<FontAwesomeIcon icon={faPencilAlt}/>*/}
                                                Ver Avances
                                            </Link> 
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