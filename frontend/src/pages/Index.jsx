import React from 'react'

const Index = () => {
    return (
        <div className='body-index'>
            
        </div>
    )
}

export {Index};


// import React from 'react'
// import logoindex from '../media/logoindex.png';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faAddressCard, faHome, faUsers, faProjectDiagram, faFileSignature, faClipboardCheck, faSignOutAlt, faBullseye} from "@fortawesome/free-solid-svg-icons";
// import { Link, NavLink } from 'react-router-dom';
// import { useAuth } from '../context/authContext';

// const Index = () => {
//     return (        
//         <div className='Body-index'>
//             <div className="square">
//                 <NavLink to='/GestionProyectos'>
//                     <FontAwesomeIcon icon={faProjectDiagram} size='5x'/>            
//                     <p>Proyectos</p>                            
//                 </NavLink>
//             </div>
//             <div className="square">
//                 <NavLink to='/usuario/EstadoUsuario'>
//                     <FontAwesomeIcon icon={faUsers} size='5x'/>            
//                     <p>Usuarios</p>
//                 </NavLink>                    
//             </div>
//             <div className="square">
//                 <NavLink to='/GestionInscripciones'>
//                     <FontAwesomeIcon icon={faAddressCard} size='5x'/>
//                     <p>Inscripciones</p>
//                 </NavLink>
//             </div>                
//             <div className="square">
//                 <NavLink to='Avances/AvancesPorProyecto'>
//                     <FontAwesomeIcon icon={faClipboardCheck} size='5x'/>
//                     <p>Avances</p>
//                 </NavLink>
//             </div>
//             <div className="square">
//                 <NavLink to='https://github.com/kiadom/QuimbayaDevReloadedCiclo4/blob/release/README.md'>
//                     <img src={logoindex}alt="" />
//                     <p>NerdAlert</p>
//                 </NavLink>
//             </div>           
//             <div className="square">
//                 <NavLink to='/GestionInscripciones'>
//                     <FontAwesomeIcon icon={faSignOutAlt} size='5x'/>
//                     <p><Logout className='dark'/></p>
//                 </NavLink>
//             </div>
//         </div>
//     )
// };

// const Logout = () => {
//     const { setToken } = useAuth();
//     const deleteToken = () => {
//       console.log('eliminar token');
//       setToken(null);
//     };
//     return (
//       <div>
//         <ul>

//           <li onClick={() => deleteToken()}>
//             <NavLink to='/auth/login'>
//               <div class='salirIndex'>
//                 <span >Cerrar Sesión</span>
//               </div>
//             </NavLink>
//           </li>
            
//         </ul>
//       </div>
//        );
//     };

// export {Index};