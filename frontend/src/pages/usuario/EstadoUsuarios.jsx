import React, { useRef, useEffect, useState }from 'react'
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../../hooks/useFormData";
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { EDITAR_USUARIO } from "../../graphql/usuarios/mutation"
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faUsers} from "@fortawesome/free-solid-svg-icons";
import DropDown from '../../components/DropDown';
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';
import ButtonLoading from '../../components/ButtonLoading';
import { Sidebar } from '../../components/Sidebar';
import PrivateComponent from '../../components/PrivateComponent';

const EstadoUsuarios = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {data: queryData, error: queryError, loading: queryLoading,} = useQuery(GET_USUARIO, {
        variables: {_id},
    });

    console.log("este es el queryData",queryData);

    const [editarUsuario, { 
        data: mutationData, 
        loading: mutationLoading, 
        error: mutationError 
    }] = useMutation(EDITAR_USUARIO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('FormData', formData);
        delete formData.rol;
        editarUsuario({
            variables: { _id, ...formData },
        });
    };
  
    useEffect(() => {
        if (mutationError) {
          toast.error('Error modificando el usuario');
        }
    
        if (queryError) {
          toast.error('Error consultando el usuario');
        }
    }, [queryError, mutationError]);

    useEffect(() => {
        if (mutationData) {
          toast.success('Usuario modificado correctamente');
        }
    }, [mutationData]);

    if (queryLoading) {
        return (
            <div className = "contenedor-body">
                <div className='cargando'></div>
        </div>
    )}
    
    
    return (
      <div className="body-text">
        <Sidebar icono={faUsers} titulo="EDITAR ESTADO USUARIO" />
        <div className="contenedor-body">
          <h1 className="rp_subtitulo">Editar Estado Usuario</h1>
          <Link to="/GestionUsuarios">
            <h1 className="rp_subtitulo">
              <FontAwesomeIcon icon={faArrowLeft} size="1x" />
              <span> Volver al listado de usuarios</span>
            </h1>
          </Link>
          <br />
          <div className="editarusuario">
            <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
              <span className="datos">id: {queryData.Usuario._id}</span>
              <br />
              <span className="datos">
                Identificación: {queryData.Usuario.identificacion}
              </span>
              <br />
              <span className="datos">Nombres: {queryData.Usuario.nombre}</span>
              <br />
              <span className="datos">
                Apellidos: {queryData.Usuario.apellido}
              </span>
              <br />
              <span className="datos">
                Correo Electronico: {queryData.Usuario.correo}
              </span>
              <br />
              <span className="datos">
                Rol del usuario: {Enum_Rol[queryData.Usuario.rol]}
              </span>
              <br />
              <br />
              <DropDown
                label="Estado del usuario:"
                name="estado"
                defaultValue={queryData.Usuario.estado}
                required={true}
                options={Enum_EstadoUsuario}
              />
              <br />
              <ButtonLoading
                disabled={Object.keys(formData).length === 0}
                loading={mutationLoading}
                text="Confirmar"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default EstadoUsuarios;
