import React, {useEffect} from 'react';
import { useQuery } from "@apollo/client";
import {GET_INSCRIPCIONES} from "../graphql/inscripciones/queries";
import { toast } from 'react-toastify';

//import {APROBAR_INSCRIPCION} from "../graphql/inscripciones/mutations";


const GestionInscripciones = () => {

    const { data, error, loading } = useQuery(GET_INSCRIPCIONES);

    useEffect(() => {
        if (error) {
          toast.error('Error consultando las inscripciones');
        }
      }, [error]);
    
      if (loading) return <div>Cargando....</div>;


    return (

        <div className="body-text">
            <h1>Inscripciones</h1>
            <table>
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Proyecto</th>
                        <th>Lider del proyecto</th>
                        <th>Estudiante Inscrito</th>
                        <th>Estado</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                        <th>Editar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data && 
                        data.Inscripciones.map((i) => {
                            return (
                                <tr key = { i._id }>
                                    <td>{ i._id}</td>
                                    <td>{i.proyecto.nombre}</td>
                                    <td>{ (i.proyecto.lider.nombre)+' '+(i.proyecto.lider.apellido)}</td>
                                    <td>{ (i.estudianteInscrito.nombre)+' '+(i.estudianteInscrito.apellido)}</td>
                                    <td>{ i.estadoInscripcion }</td>
                                    <td>{ i.fecha_ingreso }</td>
                                    <td>{ i.fecha_egreso }</td>
                                    <td><button disabled={i.estadoInscripcion !== 'PENDIENTE'} 
                                    onClick={() => {
                                        // <AprobarInscripcion/>;
                                      }}
                                      >Aprobar</button>
                                         
                                    
                                   </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );

};




export { GestionInscripciones, };