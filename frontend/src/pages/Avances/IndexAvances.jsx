import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTOSMODAVANCE } from "../../graphql/avances/querys";
import { Link } from "react-router-dom";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUsersCog, faPencilAlt,faTrash,faCheck} from "@fortawesome/free-solid-svg-icons";

const IndexAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
        const { data } = useQuery(GET_PROYECTOSMODAVANCE);

    
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSMODAVANCE", data);
        }, [data]);
        
    

    return (
        <div className="body-text">
            <TablaAvances listaAvances = { data }/>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
            <h1>Lista de Proyectos en los que se Encuentra Inscrito</h1>
                <table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th>Nombre Proyecto</th>
                        <th>Lider Proyecto </th>
                    </tr>
                </thead>
                <tbody>
                    { listaAvances && 
                        listaAvances.Proyectos.map((p) => {
                            return (
                                <tr key = { p._id }>
                                    <td>{ p._id }</td>
                                    <td>{ p.nombre }</td>
                                    <td>{ (p.lider.nombre)+" "+(p.lider.apellido) }</td>
                                    <td>
                                        <Link to = {`/avances/AvancesPorProyecto/${p._id}` }>
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