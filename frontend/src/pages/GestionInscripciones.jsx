import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {GET_INSCRIPCIONES, GET_INSCRIPCIONESESTUDIANTE, GET_INSCRIPCIONLIDER} from "../graphql/inscripciones/queries";
import {APROBAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import {RECHAZAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import  ButtonLoading from '../components/ButtonLoading';
import { toast } from 'react-toastify';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
} from '../components/Accordion';
import { useUser } from '../context/userContext';
import {Enum_EstadoInscripcion} from '../utils/enums'


const GestionInscripciones  = () => {
  const { data, loading, error, refetch } = useQuery(GET_INSCRIPCIONES);
  const { userData } = useUser();

  useEffect(() => {
    console.log(data);
  }, [data]);
  if (loading) return <div>Cargando...</div>;

  if (userData.rol === 'ESTUDIANTE'){
    return (
      <div className = "body-text">
          <InscripcionEstudiante idEstudiante = { userData }  />
      </div>
    )

  }

  if (userData.rol === 'LIDER'){
    return (
      <div className = "body-text">
          <InscripcionLider idLider = { userData }  />
      </div>
    )

  }

  if (userData.rol === 'ADMINISTRADOR'){
  return (
    
    
        <div className='body-text'>
          <div >
          <h1>Inscripciones</h1>
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
  const [aprobarInscripcion, { data, loading, error }] = useMutation(APROBAR_INSCRIPCION);
  const [rechazarInscripcion, { data:dataRechazar, loading: loadingRechazar, error: errorRechazar }] = useMutation(RECHAZAR_INSCRIPCION);
  const { userData } = useUser();
 
  useEffect(() => {
    if (data) {
      toast.success('Aprobado con exito');
      
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Error aprobando la inscripcion');
    }
  }, [error]);

   useEffect(() => {
    if (dataRechazar) {
      toast.success('Rechazado con exito');
      refetch();
    }
  }, [dataRechazar]);

  useEffect(() => {
    if (errorRechazar) {
      toast.error('Error rechazando la inscripcion');
    }
  }, [errorRechazar]);

  if(loading) return <div>Cargando...</div>
  if(loadingRechazar) return <div>Cargando...</div>
  

  const AInscripcion = () => {
    aprobarInscripcion({
      variables: {
        aprobarInscripcionId: inscripcion._id,
      },
    });
  };

  const RInscripcion = () => {
    rechazarInscripcion({
      variables: {
        rechazarInscripcionId: inscripcion._id,
      },
    });
  };

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
                        <th>Editar</th>
                        
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
                                    <td>
                                      {inscripcion.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => {
                                            AInscripcion();
                                        }}
                                        text='Aprobar Inscripcion'
                                        loading={loading}
                                        disabled={userData.rol === 'ADMINISTRADOR'}
                                        />
                                        )}<br/>                                  
                                    
                                    {inscripcion.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => RInscripcion()}
                                        text='Rechazar Inscripcion'
                                        loading={loading}
                                        disabled={userData.rol === 'ADMINISTRADOR'}
                                        />
                                        )} 
                                    </td>
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
      <div className = "body-text">
          <h1>Cargando</h1>
      </div>
  );
};

const InscripcionLider = ({ idLider }) => {
  const { userData } = useUser();
  const { data, loading } = useQuery(GET_INSCRIPCIONLIDER, {
      variables: { lider: userData._id },
  });
  

  if (!loading) {
      return (
          <div className = "rp_formulario">
              <h1 className = "rp_subtitulo">Inscripciones</h1>
              <table className = "table">
                  <thead>
                      <tr>
                        <th>Proyecto</th>
                        <th>Lider del proyecto</th>
                        <th>Estudiante Inscrito</th>
                        <th>Correo Estudiante</th>
                        <th>Fecha de ingreso</th>
                        <th>Fecha de egreso</th>
                        <th>Estado</th>
                      </tr>
                  </thead>
                  <tbody>
                      { data && 
                          data.InscripcionesLider.map((l) => {
                              return (
                                  <tr  key = { l._id }>
                                    <td>{l.nombre }</td>
                                    <td>{(l.lider.nombre)+' '+(l.lider.apellido)}</td>
                                    
                                    {/* 
                                    <td>{data.l.inscripciones.estudianteInscrito.nombre}</td>
                                    <td>{l.inscripciones.estudianteInscrito.correo}</td>
                                    <td>{ l.inscripciones.fecha_ingreso }</td>
                                    <td>{ l.inscripciones.fecha_egreso }</td>   
                                    <td> {Enum_EstadoInscripcion[l.inscripciones.estadoInscripcion]} </td> */}
                                    </tr>
                              )
                          })}
                  </tbody>
              </table>
          </div>
      )
  }

  return (
      <div className = "body-text">
          <h1>Cargando</h1>
      </div>
  );
};






export { GestionInscripciones};