import React from 'react';
import logoheader from '../media/logoheader.png';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
import { NavLink } from 'react-router-dom';



function Header() {
  return (
    <div className="wrapper">
      <header className="principal">
        <div className="iconCompany">
          <img src={logoheader} alt="logo-header" height="70px" />
        </div>
        <div className='botonHeader'>
          <p><Logout /></p>
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
    <li onClick={() => deleteToken()}>
      <NavLink to='/auth/login'>
        <div >
          <i />
          <span >Cerrar Sesión</span>
        </div>
      </NavLink>
    </li>
  );
};


export { Header };