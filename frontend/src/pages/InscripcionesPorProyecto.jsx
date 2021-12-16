import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';



import { GET_INSCRIPCIONPROYECTO } from "../graphql/inscripciones/queries";
import {Enum_EstadoInscripcion} from '../utils/enums'


const InscripcionesPorProyecto = () => {


    const { proyecto } = useParams();
    const { data, loading } = useQuery(GET_INSCRIPCIONPROYECTO,{

        variables:{ proyecto }
    });

    if (!loading){
    return (
        <TablaInscripciones listaInscripciones = { data }/>
    )
    };
    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};

const TablaInscripciones = ({ listaInscripciones }) => {
        
        <div >

        <table className="table">
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Estudiante Inscrito</th>
                        <th>Correo</th>
                        <th>Estado</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                        <th>Editar</th>
                        
                    </tr>
                </thead>
                {/* <tbody >
                    
                { listaInscripciones && 
                          listaInscripciones.InscripcionPorProyecto.map((e) => {
                              console.log(listaInscripciones.InscripcionPorProyecto);
                                    <tr  key = { e._id }>
                                    <td>{ e._id}</td>
                                    

                                    <td>{ (e.estudianteInscrito.nombre)+' '+(e.estudianteInscrito.apellido)}</td>
                                    <td>{ (e.estudianteInscrito.correo)}</td>
                                    <td> {Enum_EstadoInscripcion[e.estadoInscripcion]} </td>
                                    <td>{ e.fecha_ingreso }</td>
                                    <td>{ e.fecha_egreso }</td>                        
                                    <td>
                                      {e.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => {
                                            AInscripcion();
                                        }}
                                        text='Aprobar Inscripcion'
                                        loading={loading}
                                        disabled={userData.rol === 'ADMINISTRADOR'}
                                        />
                                        )}<br/>                                  
                                    
                                    {e.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => RInscripcion()}
                                        text='Rechazar Inscripcion'
                                        loading={loading}
                                        disabled={userData.rol === 'ADMINISTRADOR'}
                                        />
                                    )}
                                    </td>
                                    </tr>
                                })
                                    
                                    
                          }
                                    </tbody> */}
            </table>
        </div>
    
};




export {InscripcionesPorProyecto} ;