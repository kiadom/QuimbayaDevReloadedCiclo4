import logoheader from '../media/logoheader.png';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export const HeaderInicio = () => {
  
    return (
        <div className='header-inicio'>
            <div className="iconCompanyInicio">
                <img src= {logoheader} />
            </div>
            <ul className='botonHeaderInicio'>
                <li>
                  <NavLink to='/Registro'>
                    <span>Registro</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/Registro'>
                    <span>Ingreso</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/Registro'>
                    <span>Usuario</span>
                  </NavLink>
                </li>              
                <li><Logout/></li>                
            </ul>            
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
      <div>
        <ul>

          <li onClick={() => deleteToken()}>
            <NavLink to='/auth/login'>
              <div class='bg red'>
                <span >Cerrar Sesión</span>
              </div>
            </NavLink>
          </li>
            
        </ul>
      </div>
       );
    };
