import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from '../../graphql/usuarios/querys'
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen} from "@fortawesome/free-solid-svg-icons";

const GestionUsuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS);

    const [testoBoton, setTextoBoton] = useState('Ver Listado de Usuarios');
    const [mostrarTabla, setMostrarTabla] = useState(true);

    useEffect(() => {
        console.log('data servidor', data);
      }, [data]);
    
      useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
      }, [error]);

    return (
        <div className="body-text">
            <h1>MODULO DE GESTION DE USUARIOS</h1>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.Usuarios.map((u) => {
                            return (
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.identificacion}</td>
                                    <td>{u.nombre}</td>
                                    <td>{u.apellido}</td>
                                    <td>{u.correo}</td>
                                    <td>{Enum_Rol[u.rol]}</td>
                                    <td>{Enum_EstadoUsuario[u.estado]}</td>
                                    <td>
                                        <Link to={`/GestionUsuarios/Editar/${u._id}`}>
                                            <FontAwesomeIcon icon={ faPen } size="1x" color='#FFFFFF' className='cursor-pointer text-gray-600 hover:text-gray-900'/> 
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/Avances/IndexAvances/${u._id}`}>
                                            {/*<FontAwesomeIcon icon={ faPen } size="1x" color='#FFFFFF' className='cursor-pointer text-gray-600 hover:text-gray-900'/> */}
                                            Ver Proyectos en los que está Inscrito
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
};

export default GestionUsuarios ;
