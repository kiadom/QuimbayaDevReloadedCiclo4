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
    <div >
      <div >
      <h1>Inscripciones</h1>
        <div >
          <AccordionInscripcion
            titulo='Inscripciones aprobadas'
            data={data.Inscripciones.filter((el) => el.estadoInscripcion === 'ACEPTADA')}
          />
          <AccordionInscripcion
            titulo='Inscripciones pendientes'
            data={data.Inscripciones.filter((el) => el.estadoInscripcion === 'PENDIENTE')}
            refetch={refetch}
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
        <div className='flex'>
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
      toast.success('Modificado con exito');
      refetch();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error('Error modificando la inscripcion');
    }
  }, [error]);

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
    <div className='bg-gray-900 text-gray-50 flex flex-col p-6 m-2 rounded-lg shadow-xl'>

        
      <span>{inscripcion.proyecto.nombre}</span>
      <span>{inscripcion.estudianteInscrito.nombre}</span>
      <span>{inscripcion.estadoInscripcion}</span>
      <div>
      {inscripcion.estadoInscripcion === 'PENDIENTE' && (
        <ButtonLoading
          onClick={() => {
            AInscripcion();
          }}
          text='Aprobar Inscripcion'
          loading={loading}
          disabled={false}
        />
        )}
        </div>
        <div>
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
      </div>
    </div>
  );
};

export { GestionInscripciones};