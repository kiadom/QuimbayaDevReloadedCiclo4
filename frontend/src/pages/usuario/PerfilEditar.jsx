import React, {useEffect} from 'react'
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { EDITAR_PERFIL } from '../../graphql/autenticacion/mutations';
import { useMutation, useQuery } from "@apollo/client";
import useFormData from "../../hooks/useFormData";
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import { useParams } from 'react-router-dom';

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

    if (queryLoading) return <div>Cargando....</div>;

    return (
        <div className="body-text">
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Editar perfil</h1>
                <br />
            </div>
            <form className='logueo' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                    <div>
                        <span>_id:{queryData.Usuario._id}</span>
                  
                        <p><Input label='Nombre:' name='nombre' type='text' defaultValue={queryData.Usuario.nombre}/></p>
                        <p><Input label='Apellido:' name='apellido' type='text' defaultValue={queryData.Usuario.apellido}/></p>
                        <p><Input label='Documento:' name='identificacion' type='text' defaultValue={queryData.Usuario.identificacion}/></p>
                        <p><Input label='Nuevo Correo:' name='correo' type='email' defaultValue={queryData.Usuario.correo} /></p>
                        <p><Input label='Nueva Contraseña:' name='contrasena' type='password' /></p>
                    </div>
                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={loadingMutation}
                        text='Editar'
                    />
                </form>
        </div>
    )
}

export default Editar
