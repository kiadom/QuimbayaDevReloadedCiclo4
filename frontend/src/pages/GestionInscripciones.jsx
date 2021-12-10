import React, { useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
//import PrivateRoute from 'components/PrivateRoute';
import {GET_INSCRIPCIONES} from "../graphql/inscripciones/queries";
import {APROBAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import {RECHAZAR_INSCRIPCION} from '../graphql/inscripciones/mutations';
import  ButtonLoading from '../components/ButtonLoading';
import { toast } from 'react-toastify';
import {
  AccordionStyled,
  AccordionSummaryStyled,
  AccordionDetailsStyled,
} from '../components/Accordion';

const GestionInscripciones  = () => {
  const { data, loading, error, refetch } = useQuery(GET_INSCRIPCIONES);

  useEffect(() => {
    console.log(data);
  }, [data]);
  if (loading) return <div>Cargando...</div>;
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

  useEffect(() => {
    if (data) {
      toast.success('Aprobado con exito');
      refetch();
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
                <tbody >
                    <tr key = { inscripcion._id }>
                                    <td>{ inscripcion._id}</td>
                                    <td>{inscripcion.proyecto.nombre}</td>
                                    <td>{ (inscripcion.proyecto.lider.nombre)+' '+(inscripcion.proyecto.lider.apellido)}</td>
                                    <td>{ (inscripcion.estudianteInscrito.nombre)+' '+(inscripcion.estudianteInscrito.apellido)}</td>
                                    <td>{ inscripcion.estadoInscripcion }</td>
                                    <td>{ inscripcion.fecha_ingreso }</td>
                                    <td>{ inscripcion.fecha_egreso }</td>                        
                                    <td>{inscripcion.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => {
                                            AInscripcion();
                                        }}
                                        text='Aprobar Inscripcion'
                                        loading={loading}
                                        disabled={false}
                                        />
                                        )}</td>                                  
                                    <td>
                                    {inscripcion.estadoInscripcion === 'PENDIENTE' && (
                                        <ButtonLoading
                                        onClick={() => {
                                            RInscripcion();
                                        }}
                                        text='Rechazar Inscripcion'
                                        loading={loading}
                                        disabled={false}
                                        />
                                        )} 
                                    </td>
                                    </tr>
                                    </tbody>
            </table>
            </div>
  );
      
};

export { GestionInscripciones};