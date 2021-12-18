import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard, faHome, faUsers, faUser, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import PrivateComponent from './PrivateComponent';

library.add(faAddressCard);

const Logout = () => {
    const { setToken } = useAuth();
    const deleteToken = () => {
      console.log('eliminar token');
      setToken(null);
    };
    return (
      <li onClick={() => deleteToken()}>
        <NavLink to='/auth/login'>
            <FontAwesomeIcon icon={faSignOutAlt} size='1x' color='#eeeeee'/>
            <span ></span> Cerrar Sesión
        </NavLink>
      </li>
    );
  };

function Sidebar(props){
    return (
        <div className="body-tex">
            <div className ="sidebar">
               
                    <div className='iconoEncabezado'>
                        <FontAwesomeIcon icon={props.icono} size="5x" color= '#eeeeee'/>
                        <h4 className='tituloEncabez{ado'>{props.titulo}</h4>
                    </div>
                    <ul>
                    <li>
                        <NavLink to ='/Perfil'> 
                            <FontAwesomeIcon icon={faUser} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Perfil
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink to ='/'>
                            <FontAwesomeIcon icon={faHome} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Inicio
                        </NavLink>
                        </li>
                        <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
                        <li>
                        <NavLink to ='/GestionUsuarios'> 
                            <FontAwesomeIcon icon={faUsers} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Usuarios
                        </NavLink> 
                        </li>
                        </PrivateComponent>
                        <li>
                        <NavLink to ='/GestionInscripciones'> 
                            <FontAwesomeIcon icon={faFileSignature} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Inscripciones
                        </NavLink> 
                        </li>
                        <li>
                        <NavLink to ='/GestionProyectos'>
                            <FontAwesomeIcon icon={faProjectDiagram} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Proyectos
                        </NavLink>
                        </li>
                        <li>
                            
                        <NavLink to ='/Avances/EntradaAvances'> 
                            <FontAwesomeIcon icon={faClipboardCheck} size='1x' color='#eeeeee'/>
                            <span className='item'></span> Avances
                        </NavLink> 
                        
                        </li>
                        <li>
                            <p><Logout/></p>
                        </li>
                    </ul>
                </div>
                
            </div>
        
    )
}


export { Sidebar };