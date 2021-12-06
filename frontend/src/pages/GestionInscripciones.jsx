import React, {useEffect} from 'react';
import { useQuery, useMutation } from "@apollo/client";
import {GET_INSCRIPCIONES} from "../graphql/inscripciones/queries";
//import { toast } from 'react-toastify';
//import { Link } from 'react-router-dom';
//import {APROBAR_INSCRIPCION, RECHAZAR_INSCRIPCION} from "../graphql/inscripciones/mutaciones";

const GestionInscripciones = () => {

    const { data, error, loading } = useQuery(GET_INSCRIPCIONES);

    /*useEffect(() => {
        console.log("data servidor", data);
    }, [data]);*/

    useEffect(() => {
        if (error) {
          //toast.error('Error consultando las inscripciones');
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
                                    <td><button 
                                    disabled={i.estadoInscripcion !== 'PENDIENTE'}>Aprobar</button>
                                    <button
                                    disabled={i.estadoInscripcion !== 'PENDIENTE'}>Rechazar</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );

};

/*const AprobarInscripcion = () => {

    const [{ aprobarInscripcion, data: dataAprobar, error: errorAprobar, loading: loadingAprobar } = useMutation(APROBAR_INSCRIPCION); ]
    if (loadingAprobar) return <div>Cargando....</div>;
    const aprobarI= (i)=>{
        aprobar({APROBAR_INSCRIPCION});

};

const RechazarInscripcion = () => {

    const { aprobar, data: dataRechazar, error: errorRechazar, loading: loadingRechazar } = useMutation(RECHAZAR_INSCRIPCION); 
    if (loadingRechazar) return <div>Cargando....</div>;
}*/

export { GestionInscripciones}