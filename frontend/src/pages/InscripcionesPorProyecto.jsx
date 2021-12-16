import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {APROBAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import {RECHAZAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import { useUser } from '../context/userContext';
import { toast } from "react-toastify";
import {Enum_EstadoInscripcion} from '../utils/enums'
import  ButtonLoading from '../components/ButtonLoading';
import { GET_INSCRIPCIONPROYECTO, GET_INSCRIPCIONES } from "../graphql/inscripciones/queries";



const InscripcionesPorProyecto = () => {


    const { proyecto } = useParams();
    const { data, loading } = useQuery(GET_INSCRIPCIONPROYECTO,{

        variables:{ proyecto }
    });
    const { data:dataI, loading: loadingI, error: errorI } = useQuery(GET_INSCRIPCIONES);
    const { userData } = useUser();

    useEffect(() => {
        console.log(dataI);
      }, [dataI]);

    useEffect(() => {
        console.log("Datos obtenidos con GET_INSCRIPCIONPROYECTO", proyecto);
    }, [data]);

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

    return (
        
        <div className = "body-text">

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
                <tbody >
                    
                { listaInscripciones && 
                          listaInscripciones.InscripcionPorProyecto.map((e) => {
                              return (
                                    <tr  key = { e.proyecto._id }>
                                    <td>{ e._id}</td>
                                    <td>{ (e.estudianteInscrito.nombre)+' '+(e.estudianteInscrito.apellido)}</td>
                                    <td>{ (e.estudianteInscrito.correo)}</td>
                                    <td> {Enum_EstadoInscripcion[e.estadoInscripcion]} </td>
                                    <td>{ e.fecha_ingreso }</td>
                                    <td>{ e.fecha_egreso }</td>                        
                                    <td>{e.estadoInscripcion === 'PENDIENTE' && (
                                    <AprobarInscripcion
                                                    idInscripcion = { e._id }/>
                                    )}<br/> 
                                    {e.estadoInscripcion === 'PENDIENTE' && (
                                    <RechazarInscripcion
                                                    idInscripcion = { e._id }/>
                                    )}
                                    
                                    </td>
                                    </tr>
                           ) })
                                    
                                    
                          }
                                    </tbody>
            </table>
        </div>
    )
};


const AprobarInscripcion = ({ idInscripcion}) => {
    
    const [aprobarInscripcion, { data, loading }] = useMutation(APROBAR_INSCRIPCION);

    useEffect(() => {
        if (data) {
          toast.success('Aprobado con exito');
          
        }
      }, [data]);
  
    const confirmarAprobacion = () => {
      aprobarInscripcion({ variables: { aprobarInscripcionId: idInscripcion} });
    };
        return (
            <>
                <ButtonLoading
                  onClick={() => confirmarAprobacion()}
                  disabled={false}
                  loading={loading}
                  text='Aprobar Inscripción'
                />
              
            </>
          );
};

const RechazarInscripcion = ({ idInscripcion}) => {
    
    const [rechazarInscripcion, { data, loading }] = useMutation(RECHAZAR_INSCRIPCION);

    useEffect(() => {
        if (data) {
          toast.success('Aprobado con exito');
          
        }
      }, [data]);
  
    const confirmarRechazo = () => {
        rechazarInscripcion({ variables: { rechazarInscripcionId: idInscripcion} });
    };
        return (
            <>
                <ButtonLoading
                  onClick={() => confirmarRechazo()}
                  disabled={false}
                  loading={loading}
                  text='Rechazar Inscripción'
                />
              
            </>
          );
};


export {InscripcionesPorProyecto} ;