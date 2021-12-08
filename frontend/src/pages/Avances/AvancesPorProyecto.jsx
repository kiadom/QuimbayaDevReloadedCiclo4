import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCESPORPROYECTO } from "../../graphql/avances/querys";
import { useParams, Link } from "react-router-dom";




const AvancesPorProyecto = () => {
    const { proyecto } = useParams();
    const { data } = useQuery(GET_AVANCESPORPROYECTO,{
        variables:{ proyecto }
    });

    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCESPORPROYECTO", data);
    }, [data]);


    return (
        <div className="body-text">
            <TablaAvances listaAvanc = { data }/>
        </div>
    );
};

const TablaAvances = ({ listaAvanc }) => {
    return (
        <div>
            <h1>Lista de Proyectos en los que se Encuentra Inscrito</h1>
                
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Detalle Avance</th>
                            <th>Observaciones Lider</th>
                            <th>Creado Por</th>
                            <th>Lider</th>
                        </tr>
                    </thead>
                    <tbody>
                        <p>Editar Avance</p>
                            {/*
                            { listaAvanc &&
                                listaAvanc.Avances.map((p) => {
                                    return (
                                        <p>
                                            ensayo1
                                        </p>
                                    )
                                }
                                )}
                            */}
                    </tbody>
                </table>
        </div>
    )
}

export {AvancesPorProyecto} ;