import React, { useRef, useEffect, useState }from 'react'
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../../hooks/useFormData";
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { EDITAR_USUARIO } from "../../graphql/usuarios/mutation"
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import DropDown from '../../components/DropDown';
import { Enum_EstadoUsuario } from '../../utils/enums';
import ButtonLoading from '../../components/ButtonLoading';

const EstadoUsuarios = () => {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: { _id },
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

    if (queryLoading) return <div>Cargando....</div>;

    return (
        <div className="body-text">
            <Link to='/GestionUsuarios'>
                <FontAwesomeIcon icon={ faArrowLeft } size="1x" color='#FFFFFF' className='cursor-pointer'/>
            </Link>
            <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Estado Usuario</h1>
            <br />
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
            >
                <Input
                    label='Nombre de la persona:'
                    type='text'
                    name='nombre'
                    defaultValue={queryData.Usuario.nombre}
                    required={true}
                />
                <Input
                    label='Apellido de la persona:'
                    type='text'
                    name='apellido'
                    defaultValue={queryData.Usuario.apellido}
                    required={true}
                />
                <Input
                    label='Correo de la persona:'
                    type='email'
                    name='correo'
                    defaultValue={queryData.Usuario.correo}
                    required={true}
                />
                <Input
                    label='Identificación de la persona:'
                    type='text'
                    name='identificacion'
                    defaultValue={queryData.Usuario.identificacion}
                    required={true}
                />
                <DropDown
                    label='Estado de la persona:'
                    name='estado'
                    defaultValue={queryData.Usuario.estado}
                    required={true}
                    options={Enum_EstadoUsuario}
                />
                <span>Rol del usuario: {queryData.Usuario.rol}</span>
                <ButtonLoading
                disabled={Object.keys(formData).length === 0}
                loading={mutationLoading}
                text='Confirmar'
                />
            </form>
        </div>
    )
}

export default EstadoUsuarios
