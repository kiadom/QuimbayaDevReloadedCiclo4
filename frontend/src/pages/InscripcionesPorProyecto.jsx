import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import {APROBAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import {RECHAZAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import { toast } from "react-toastify";
import {Enum_EstadoInscripcion} from '../utils/enums'
import  ButtonLoading from '../components/ButtonLoading';
import { GET_INSCRIPCIONPROYECTO, GET_INSCRIPCIONES } from "../graphql/inscripciones/queries";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "../components/Sidebar";


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
        <div className = "contenedor-body">
            <div className='cargando'>        
      </div>
        </div>
    );
};

const TablaInscripciones = ({ listaInscripciones }) => {
const { data, loading } = useQuery(GET_INSCRIPCIONES);

    if (!loading){

    return (
        
        <div className = "body-text">
            <Sidebar icono={faAddressCard} titulo='INSCRIPCIONES'/>
            <div className="contenedor-body">
                <Link to = {`/GestionInscripciones`}>
                <h1 className = "rp_subtitulo">
                    <FontAwesomeIcon icon={ faArrowLeft } size="1x" color='#FFFFFF' className='cursor-pointer'/>
                    <span>   Volver Menu Inscripciones </span></h1>            
                </Link>
                <br/>

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
        </div>
    )
}

return (
    <div className = "contenedor-body">
        <div className='cargando'>        
      </div>
    </div>
);
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

    if (!loading){
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
}; return (
    <div className = "contenedor-body">
        <div className='cargando'>        
      </div>
    </div>
);

};

const RechazarInscripcion = ({ idInscripcion}) => {
    
    const [rechazarInscripcion, { data, loading }] = useMutation(RECHAZAR_INSCRIPCION);

    useEffect(() => {
        if (data) {
          toast.success('Rechazado con exito');
          
        }
      }, [data]);
  
    const confirmarRechazo = () => {
        rechazarInscripcion({ variables: { rechazarInscripcionId: idInscripcion} });
    };

    if (!loading){
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

        }; return (
            <div className = "contenedor-body">
                <div className='cargando'>        
      </div>
            </div>
        );
};



export {InscripcionesPorProyecto} ;