import React, { useEffect } from 'react'
import { useUser } from '../../context/userContext';
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@apollo/client'
import{Sidebar} from'../../components/Sidebar';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Perfil = () => {
    const {userData} = useUser();

    return (
        <div className="body-text">
            <Sidebar icono={faUsers} titulo='INFORMACIÓN DE USUARIO'/>
            <div className='contenedor-body'>
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Información del perfil</h1>
                <br />
                <table className='perfil'>
                    <tbody>
                    <tr key={userData._id}>
                                    <tr>
                                        <td className='dato_1'>Nombre:</td>
                                        <td>{userData.nombre} {userData.apellido}</td>
                                    </tr>
                                    <tr>
                                        <td className='dato_1'>Identificación:</td>
                                        <td>{userData.identificacion}</td>
                                    </tr>
                                    <tr>
                                        <td className='dato_1'>Correo:</td>
                                        <td>{userData.correo}</td>
                                    </tr>
                                    <tr>
                                        <td className='dato_1'>Contraseña:</td>
                                        <td>***********</td>
                                    </tr>
                                    <br />
                                    <NavLink to={`/usuario/Perfil/Editar/${userData._id}`}>
                                    <button className='boton_2'> Editar</button></NavLink>

                                </tr>

                    </tbody>
                </table>

            </div>
            </div>
        </div>
    )
}

export default Perfil;
