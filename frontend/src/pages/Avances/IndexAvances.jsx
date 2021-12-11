import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSMODAVANCE, GET_INSCRIPCIONESDELESTUDIANTE } from "../../graphql/avances/queries";
import { useParams, Link } from "react-router-dom";
import { useUser } from '../../context/userContext';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUsersCog, faPencilAlt,faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";

const IndexAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        /*const { userData } = useUser();*/
        const { estudianteInscrito } = useParams();
        const { data } = useQuery(GET_INSCRIPCIONESDELESTUDIANTE,{
        variables:{ estudianteInscrito }
        });
    
        useEffect(() => {
            console.log("Datos obtenidos con GET_INSCRIPCIONESDELESTUDIANTE", data);
        }, [data]);
        
        {/*useEffect(() => {
            console.log("USUARIO", userData);
        }, [data]);*/}
    

    return (
        <div className="body-text">
            {/*<h1> {(userData.nombre)+ " " +(userData.apellido) } </h1>*/}
            <TablaAvances listaAvances = { data }/>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
            <h1>Lista de Proyectos en los que se Encuentra Inscrito</h1>
                <table className="table">
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Nombre Proyecto</th>
                        
                        <th>Ver Avances </th>
                    </tr>
                </thead>
                <tbody>
                    { listaAvances && 
                        listaAvances.InscripcionPorEstudiante.map((p) => {
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