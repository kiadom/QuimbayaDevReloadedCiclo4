import logoheader from '../images/logoheader.png';
import footerloginV2 from '../images/footerloginV2.png';
import Footer from "../components/Footer";
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);


function AdminUsuariosPage(){
    return (
        <div>
            
            <div className="wrapper">
                <div className="sidebar">
                    
                    <div className="EncabezadoModulo">
                        <FontAwesomeIcon icon={faUsersCog} size="5x" color='#00ADB5'/> 
                        <span className="icon"><i className="fas fa-users-cog fa-5x"></i></span>
                        <h3>GESTION DE USUARIOS Y ROLES</h3>
                    </div>
                    <Sidebar />               
                </div>
               

                <div className="principal">
                    <Header />

                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE USUARIOS Y ROLES</div>
                        <div className="rp_subtitulo">INGRESE EL ID DEL USUARIO Y LOS ROLES A MODIFICAR</div>


                        <div className="rp_formulario1">
                            <form action="">
                                <table className="tabla">
                                    <tr>
                                        <td>ID del Usuario:</td>
                                        <td><input type="text" name="id_usuario"/></td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Informacion de Ventas</td>
                                        <td><input type="radio" name="gestion_informacion_ventas"/>Si
                                            <input type="radio" name="gestion_informacion_ventas"/>No
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Maestro Estados de Ventas</td>
                                        <td><input type="radio" name="maestro_estados_ventas"/>Si
                                            <input type="radio" name="maestro_estados_ventas"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Información de Vendedores
                                        <funcionuno />
                                        </td>

                                        <td><input type="radio" name="informacion_vendedores"/>Si
                                            <input type="radio" name="informacion_vendedores"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Gestion de Usuarios y Roles</td>
                                        <td><input type="radio" name="roles_y_usuarios"/>Si
                                            <input type="radio" name="roles_y_usuarios"/>No
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><a href="#"><input className="botons" type="reset" value="Borrar ID"/></a></td>
                                        <td><a href="#"><input className="botons" type="submit" value="Actualizar Usuario"/></a></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

                <Footer/>
                
            </div>

        </div>
    );
}


export default AdminUsuariosPage;

