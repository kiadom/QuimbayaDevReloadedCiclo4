import React, { useEffect } from 'react'
import { useUser } from '../../context/userContext';
import { GET_USUARIO } from '../../graphql/usuarios/querys';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@apollo/client'

const Perfil = () => {
    const {userData} = useUser();

    return (
        <div className="body-text">
            <div className="rp_formulario">
                <h1 className="rp_subtitulo">Información del perfil</h1>
                <br />
                <table >
                    <tbody>
                    <tr key={userData._id}>
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
                                    <br />
                                    <NavLink to={`/usuario/Perfil/Editar/${userData._id}`}>
                                    <button> Editar</button></NavLink>

                                </tr>

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Perfil;
