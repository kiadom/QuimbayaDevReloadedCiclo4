import React, { useEffect } from 'react'
import { useUser } from '../../context/userContext';
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from '@apollo/client'
import{Sidebar} from'../../components/Sidebar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Enum_Rol } from '../../utils/enums';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { EDITAR_PERFIL } from '../../graphql/usuarios/mutation';

const Perfil = () => {
    const {form, formData, updateFormData} = useFormData();
    const {userData} = useUser();
    const [editarPerfil, {data:dataMutation, error:errorMutation, loading:loadingMutation}] = useMutation(EDITAR_PERFIL)

    const {data:queryData, loading:queryLoading, error:queryError} = useQuery(GET_USUARIO,{
        variables:{
            _id:userData._id,
        },
    });

    useEffect(() => {
        console.log("data mutation", dataMutation)
    },[dataMutation]);

    useEffect(() => {
        console.log("query data", queryData)
    },[queryData]);

    const submitForm = (e) => {
        e.preventDefault();
        editarPerfil({
            variables: {
                _id:userData._id,
                campos:formData,
            }
        });
    };

    if(queryLoading) return <div>Loading...</div>;

    return (
      <div className="body-text">
        <Sidebar icono={faUser} titulo="INFORMACIÓN DE USUARIO" />
        <div className="contenedor-body">
          <div className="rp_formulario">
            <h1 className="rp_subtitulo">Información del perfil</h1>
            <br />
            <form className="editarusuario" ref={form} onChange={updateFormData} onSubmit={submitForm}>
            <span className="datos">id: {queryData.Usuario._id}</span>
               <br />
               <br /> 
              <Input 
                defaultValue={queryData.Usuario.identificacion}
                label="Identificacion"
                name="identificacion"
                type="text"
                required={true}
              />
              <Input 
                defaultValue={queryData.Usuario.nombre}
                label="Nombre" 
                name="nombre" 
                type="text" 
                required={true} 
                />
              <Input
                defaultValue={queryData.Usuario.apellido}
                label="Apellido"
                name="apellido"
                type="text"
                required={true}
              />
              <Input 
                defaultValue={queryData.Usuario.correo} 
                label="Correo" 
                name="correo" 
                type="text" 
                required={true} 
                />
              {/* <Input
                defaultValue="**********"
                label="Contraseña"
                name="contrasena"
                type="text"
                required={true}
              /> */}
              <br />
              <span className="datos">
                Rol: {Enum_Rol[queryData.Usuario.rol]}
              </span>
              <br />
              <ButtonLoading
                text="Confirmar"
                loading={loadingMutation}
                disabled={false}
              />
            </form>
          </div>
        </div>
      </div>
    );
    
    /* return (
      <div className="body-text">
        <Sidebar icono={faUsers} titulo="INFORMACIÓN DE USUARIO" />
        <div className="contenedor-body">
          <div className="rp_formulario">
            <h1 className="rp_subtitulo">Información del perfil</h1>
            <br />
            <table className="perfil">
              <tbody>
                <tr key={userData._id}>
                  <tr>
                    <td className="dato_1">Id:</td>
                    <td>
                      {userData._id}
                    </td>
                  </tr>
                  <tr>
                    <td className="dato_1">Nombre:</td>
                    <td>
                      {userData.nombre} {userData.apellido}
                    </td>
                  </tr>
                  <tr>
                    <td className="dato_1">Identificación:</td>
                    <td>{userData.identificacion}</td>
                  </tr>
                  <tr>
                    <td className="dato_1">Correo:</td>
                    <td>{userData.correo}</td>
                  </tr>
                  <tr>
                    <td className="dato_1">Contraseña:</td>
                    <td>***********</td>
                  </tr>
                  <tr>
                    <td className="dato_1">Rol:</td>
                    <td>
                      {Enum_Rol[userData.rol]}
                    </td>
                  </tr>
                  <br />
                  <NavLink to={`/usuario/Perfil/Editar/${userData._id}`}>
                    <button className="boton_2"> Editar</button>
                  </NavLink>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ); */
}

export default Perfil;
