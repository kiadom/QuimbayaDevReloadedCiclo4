import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCES2 } from "../../graphql/avances/querys";
import { useParams, Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import Input from "../../components/Input";
import useFormData from "../../hooks/useFormData";


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const DetalleAvances = () => {

    /*PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
    const { _id } = useParams();
    const { data } = useQuery(GET_AVANCES2,{
        variables:{ _id },
    });

    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCES2", data);
    }, [data]);
    
    
    return (
        <div className="body-text">
            <h1>Detalle de Avances</h1>

            <table>
                    <thead>
                        <tr>
                            <th>Titulo Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        </tr>
{/*
                            <tr>{ _id.fecha }</tr>
                        listaAvances = { data }
                        
*/}
                    </tbody>
                </table>


           
        </div>
    )
}


export { DetalleAvances };
