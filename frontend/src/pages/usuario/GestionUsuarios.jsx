import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client'
import { GET_USUARIOS } from '../../graphql/usuarios/querys'
import { Enum_Rol, Enum_EstadoUsuario } from '../../utils/enums';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faTrashAlt, faPen, faClipboardCheck, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Sidebar} from '../../components/Sidebar';
import PrivateComponent from '../../components/PrivateComponent';
import PrivateRoute from '../../components/PrivateRoute';


const GestionUsuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
      }, [data]);
    
      useEffect(() => {
        if (error) {
          toast.error('Error consultando los usuarios');
        }
      }, [error]);

    if(loading) { 
        return(
            <div className = "contenedor-body">
                <div className='cargando'></div>
            </div>
        )
    }

    return (
    <PrivateRoute roleList={["ADMINISTRADOR", "LIDER"]}>
        <div className="body-text">
          <Sidebar icono={faUsers} titulo="MODULO DE GESTION DE USUARIOS" />
          <div className="contenedor-body">
            <h1 className="rp_subtitulo">MODULO DE GESTION DE USUARIOS</h1>

            <div className="tablaUsuarios">
              <table className="table">
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
                  {data && data.Usuarios ?
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
                          <td className="boton-usuarios">
                            <Link to={`/GestionUsuarios/Editar/${u._id}`}>
                              <FontAwesomeIcon icon={faPen} size="1x" />
                            </Link>
                            <FontAwesomeIcon icon={faTrashAlt} size="1x" />
                          </td>
                        </tr>
                      );
                    }):<div>No autorizado</div>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </PrivateRoute>
    );
};

export default GestionUsuarios ;
