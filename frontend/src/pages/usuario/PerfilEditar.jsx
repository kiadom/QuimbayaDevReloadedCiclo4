import React, {useEffect} from 'react'
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { EDITAR_PERFIL } from '../../graphql/autenticacion/mutations';
import { useMutation, useQuery } from "@apollo/client";
import useFormData from "../../hooks/useFormData";
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import ButtonLoading1 from '../../components/ButtonLoading1';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Editar = () => {
    const { form, formData, updateFormData } = useFormData();
    const { _id } = useParams();

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: {_id},
    });
    console.log("este es el queryData",queryData);

    const [editarPerfilUsuario, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
        useMutation(EDITAR_PERFIL);

    const submitForm = (e) => {
        e.preventDefault();
        delete formData.rol;
        console.log('FormData', formData);
        console.log("id", _id)
        editarPerfilUsuario({
        
            variables: { _id, ...formData}
        });
    };

    useEffect(() => {
        if (errorMutation) {
          toast.error('Error modificando el usuario');
        }
    
        if (queryError) {
          toast.error('Error consultando el usuario');
        }
    }, [queryError, errorMutation]);

    useEffect(() => {
        if (dataMutation) {
          toast.success('Usuario modificado correctamente');
        }
    }, [dataMutation]);

    if (queryLoading) return 
    <div className = "contenedor-body">
            <div className='cargando'>        
      </div>
        </div>;

    return (
        <div className="body-text">
            <Sidebar icono={faUsers} titulo='EDITAR PERFIL'/>
            <div className='contenedor-body'>
                <div className="rp_formulario">
                    <h1 className="rp_subtitulo">Editar perfil</h1>
                    <br />
                </div>
                <form className='logueo' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                        <div className='editar-perfil'>
                            <span>_id:{queryData.Usuario._id}</span>
                    
                            <p><Input label='Nombre:' name='nombre' type='text' defaultValue={queryData.Usuario.nombre}/></p>
                            <p><Input label='Apellido:' name='apellido' type='text' defaultValue={queryData.Usuario.apellido}/></p>
                            <p><Input label='Documento:' name='identificacion' type='text' defaultValue={queryData.Usuario.identificacion}/></p>
                            <p><Input label='Nuevo Correo:' name='correo' type='email' defaultValue={queryData.Usuario.correo} /></p>
                            <p><Input label='Nueva Contraseña:' name='contrasena' type='password' /></p>
                        </div>
                        <ButtonLoading1
                            disabled={Object.keys(formData).length === 0}
                            loading={loadingMutation}
                            text='Editar'
                            
                        />
                    </form>
            </div>
        </div>
    )
}

export default Editar
