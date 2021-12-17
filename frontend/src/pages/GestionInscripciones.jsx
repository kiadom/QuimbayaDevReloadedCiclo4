import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {GET_INSCRIPCIONES, GET_INSCRIPCIONESESTUDIANTE, GET_PROYECTOSLIDER} from "../graphql/inscripciones/queries";
import { Sidebar } from '../components/Sidebar';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
} from '../components/Accordion';
import { useUser } from '../context/userContext';
import {Enum_EstadoInscripcion} from '../utils/enums'
import { Link } from "react-router-dom";
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
const GestionInscripciones  = () => {
  const { data, loading, error, refetch } = useQuery(GET_INSCRIPCIONES);
  const { userData } = useUser();

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  if(!loading){

  if (userData.rol === 'ESTUDIANTE'){
    return (
      <div className = "body-text">
        <Sidebar icono={faAddressCard} titulo='INSCRIPCIONES'/>
        <div className='contenedor-body'>
          <InscripcionEstudiante idEstudiante = { userData }  />

        </div>
          
      </div>
    )

  }

  if (userData.rol === 'LIDER'){
    return (
      <div className = "body-text">
        <Sidebar icono={faAddressCard} titulo='INSCRIPCIONES'/>
        <div className='contenedor-body'>
          <InscripcionLider idLider = { userData }  />

        </div>
      </div>
    )

  }

  if (userData.rol === 'ADMINISTRADOR'){
  return (
    
    
        <div className='body-text'>
          <Sidebar icono={faAddressCard} titulo='INSCRIPCIONES'/>
          <div className='contenedor-body'>
          <h2 className='rp_titulo'>Inscripciones</h2>
            <div >

            <AccordionInscripcion
            
                titulo='Inscripciones pendientes'
                data={data.Inscripciones.filter((el) => el.estadoInscripcion === 'PENDIENTE')}
                refetch={refetch}
              />
              <AccordionInscripcion
                titulo='Inscripciones aprobadas'
                data={data.Inscripciones.filter((el) => el.estadoInscripcion === 'ACEPTADA')}
              />
              
              <AccordionInscripcion
                titulo='Inscripciones rechazadas'
                data={data.Inscripciones.filter((el) => el.estadoInscripcion === 'RECHAZADA')}
              />

              
            </div>
          </div>
        </div>
    
    
  );
};

}

/* MIENTRAS LA APLICACION ESTÁ CARGANDO SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
return (
    <div className = "contenedor-body">
      <div className='cargando'>        
      </div>
    </div>
)
};

const AccordionInscripcion = ({ data, titulo, refetch = () => {} }) => {
  
  return (
    <AccordionStyled>
      <AccordionSummaryStyled>
        {titulo} ({data.length})
      </AccordionSummaryStyled>
      <AccordionDetailsStyled>
        <div >
          {data &&
            data.map((inscripcion) => {
              return <Inscripcion inscripcion={inscripcion} refetch={refetch} />;
            })}
        </div>
      </AccordionDetailsStyled>
    </AccordionStyled>
  );
};



const Inscripcion = ({ inscripcion, refetch }) => {

  
  return (
    <div >

        <table className="table">
                <thead>
                    <tr>
                        <th>_id</th>
                        <th>Proyecto</th>
                        <th>Lider del proyecto</th>
                        <th>Estudiante Inscrito</th>
                        <th>Correo</th>
                        <th>Estado</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                       
                        
                    </tr>
                </thead>
                <tbody >
                    <tr  key = { inscripcion._id }>
                                    <td>{ inscripcion._id}</td>
                                    <td>{inscripcion.proyecto.nombre}</td>
                                    <td>{ (inscripcion.proyecto.lider.nombre)+' '+(inscripcion.proyecto.lider.apellido)}</td>
                                    <td>{ (inscripcion.estudianteInscrito.nombre)+' '+(inscripcion.estudianteInscrito.apellido)}</td>
                                    <td>{ (inscripcion.estudianteInscrito.correo)}</td>
                                    <td> {Enum_EstadoInscripcion[inscripcion.estadoInscripcion]} </td>
                                    <td>{ inscripcion.fecha_ingreso }</td>
                                    <td>{ inscripcion.fecha_egreso }</td>                        
                                    
                                    </tr>
                                    </tbody>
            </table>
            </div>
  );
      
};

const InscripcionEstudiante = ({ idEstudiante }) => {
  const { userData } = useUser();
  const { data, loading } = useQuery(GET_INSCRIPCIONESESTUDIANTE, {
      variables: { estudianteInscrito: userData._id },
  });
  

  if (!loading) {
      return (
          <div className = "rp_formulario">
              <h1 className = "rp_subtitulo">Inscripciones</h1>
              <table className = "table">
                  <thead>
                      <tr>
                      <th>_id</th>
                        <th>Proyecto</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                        <th>Estado</th>
                      </tr>
                  </thead>
                  <tbody>
                      { data && 
                          data.InscripcionPorEstudiante.map((e) => {
                              return (
                                  <tr  key = { e._id }>
                                      <td>{ e._id}</td>
                                    <td>{e.proyecto.nombre}</td>
                                    <td>{ e.fecha_ingreso }</td>
                                    <td>{ e.fecha_egreso }</td>   
                                    <td> {Enum_EstadoInscripcion[e.estadoInscripcion]} </td>
                                    </tr>
                              )
                          })}
                  </tbody>
              </table>
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

const InscripcionLider = ({ idLider }) => {
  const { userData } = useUser();
  const { data, loading } = useQuery(GET_PROYECTOSLIDER, {
      variables: { lider: userData._id },
  });



  if (!loading) {
      return (
          <div className = "rp_formulario">
              <h1 className = "rp_subtitulo">
                Inscripciones</h1>
              <table className = "table">
                  <thead>
                      <tr>
                        <th>Proyecto</th>
                        <th>Nombre del proyecto</th>
                        <th>Estado</th>
                        <th>Fase</th>
                        <th> </th>
                        
                      </tr>
                  </thead>
                  <tbody>
                      { data && 
                          data.ProyectosPorLider.map((l) => {
                              return (
                                  <tr  key = { l._id }>
                                    <td>{l._id }</td>
                                    <td>{(l.nombre)}</td>
                                    <td>{(l.estado)}</td>
                                    <td>{(l.fase)}</td>
                                    <td>
                                        <button className="boton_2">
                                        <Link to = {`/InscripcionesPorProyecto/${l._id}`} >
                                        {/*<FontAwesomeIcon icon={faPencilAlt}/>*/}
                                        Ver Inscripciones
                                           
                                        </Link> 
                                        </button>
                                    </td>
                                    </tr>
                              )
                          })}
                  </tbody>
              </table>
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






export { GestionInscripciones};