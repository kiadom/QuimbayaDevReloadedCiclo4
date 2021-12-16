import React from 'react'
import { useUser } from '../../context/userContext'
import { EDITAR_PERFIL } from '../../graphql/autenticacion/mutations';
import { useMutation } from "@apollo/client";
import useFormData from "../../hooks/useFormData";
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';

const EditarPerfil = () => {
    const { userData } = useUser();
    const { form, formData, updateFormData } = useFormData();

    const [editarPerfilUsuario, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(EDITAR_PERFIL);
    
    const submitForm = (e) => {
        e.preventDefault();
        editarPerfilUsuario({ variables: formData});
      };

    return (
        <div className="body-text">
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Información del perfil</h1>
                <br />
                <table >
                    <tbody>
                        <tr className="proyectos">
                            <td>Nombre:</td>
                            <td>{userData.nombre} {userData.apellido}</td>
                        </tr>
                        <tr>
                            <td>Identificación:</td>
                            <td>{userData.identificacion}</td>
                        </tr>
                        <tr>
                            <td>Correo:</td>
                            <td>{userData.correo}</td>
                        </tr>
                        <tr>
                            <td>Contraseña:</td>
                            <td>***********</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <br />
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Editar perfil</h1>
                <br />
              </div>
            <div >
      <form className='logueo' onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div>
            <p><Input value={userData._id} /></p>
          <p><Input label='Nombre:' name='nombre' type='text' value="{userData.nombre}"/></p>
          <p><Input label='Apellido:' name='apellido' type='text' placeholder="{userData.apellido}"/></p>
          <p><Input label='Documento:' name='identificacion' type='text' /></p>
          <p><Input label='Nuevo Correo:' name='correo' type='email' /></p>
          <p><Input label='Nueva Contraseña:' name='contrasena' type='password' /></p>
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={false}
          text='Editar'
        />
      </form>

    </div>
        </div>
    )
}

export default EditarPerfil;
