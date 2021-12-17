import React from 'react';
import logoheader from '../media/logoheader.png';
import { useAuth } from '../context/authContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from "@fortawesome/free-solid-svg-icons";



<<<<<<< HEAD

function Header () {
    return (
        <div className="body-text">
            <header className="principal"> 
              <div className="iconCompany">
                <img src= {logoheader} />
              </div>              
              <ul className='botonHeader'>
                <li>
                  <NavLink to='/auth/Registro'>
                    <span>Registro</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/Loguin'>
                    <span>Ingreso</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/EstadoUsuarios'>
                    <span>Usuario</span>
                  </NavLink>
                </li>              
                <li><Logout/></li> 
              </ul>              
            </header>
=======
function Header() {
  return (
    <div className="wrapper">
      <header className="principal">
        <div className="iconCompany">
          <img src={logoheader} alt="logo-header" height="70px" />
        </div>
        <div className='botonHeader'>
          <div class="dropdown">
            <button> &nbsp;Bienvenido &nbsp;| &nbsp;<FontAwesomeIcon icon={faCogs} size='1x' color='#092133' />&nbsp;</button>
            <div class="dropdown-content">
              <a><NavLink to={`/usuario/Perfil`}>Editar Perfil</NavLink></a>
              <a><Logout /></a>
            </div>
>>>>>>> 1a8c3fbb1d06887a1fb3fea3a89ca8360f94a915
          </div>
        </div>
      </header>
    </div>
  );
};

const Logout = () => {
  const { setToken } = useAuth();
  const deleteToken = () => {
    console.log('eliminar token');
    setToken(null);
  };
  return (
    <div onClick={() => deleteToken()}>
      <NavLink to='/auth/login'>
        <span >Cerrar Sesión</span>
      </NavLink>
    </div>
  );
};

export { Header };
