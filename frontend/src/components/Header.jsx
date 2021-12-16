import React from 'react';
import logoheader from '../media/logoheader.png';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
import { NavLink } from 'react-router-dom';




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
          </div>
    )
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
            <i  />
            <span >Cerrar Sesión</span>
          </div>
        </NavLink>
      </li>  
    );
  };

  export {Header};
