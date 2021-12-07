import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
//import { GET_PROYECTOSMODAVANCE } from '../graphql/avances/querys';
import { GET_PROYECTOSMODAVANCE } from "../../graphql/avances/querys";

const IndexAvances = () => {

        /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data */
        const { data } = useQuery(GET_PROYECTOSMODAVANCE);
        //const { blablabal } = useQuery(GET_AVANCES);//no los esta trayendo
    
        useEffect(() => {
            console.log("Datos obtenidos con GET_PROYECTOSMODAVANCE", data);
        }, [data]);
        //useEffect(() => {
        //    console.log("Datos obtenidos con GET_AVANCES", blablabal);
        //}, [blablabal]);
    

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
                        <th>ID Proyecto</th>
                        <th>Nombre</th>
                        <th>Detalle Avances</th>
                    </tr>
                </thead>
                <tbody>
                    { listaAvances && 
                        listaAvances.Proyectos.map((p) => {
                            return (
                                <tr key = { p._id }>
                                    <td>{ p._id }</td>
                                    <td>{ p.nombre }</td>
                                    <td></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}


export {IndexAvances};