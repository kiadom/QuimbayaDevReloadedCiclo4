import logoheader from '../images/logoheader.png';
import footerloginV2 from '../images/footerloginV2.png';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function AdminUsuariosPage(){
    return (
        <div>
            
            <div className="wrapper">
                <div className="sidebar">
                    <div className="EncabezadoModulo">
                        <span className="icon"><i className="fas fa-users-cog fa-5x"></i></span>
                        <h3>GESTION DE USUARIOS Y ROLES</h3>
                    </div>

                    <ul>
                        <li><a href="principal.html" >
                            <span className="icon"><i className="fas fa-home"></i></span>
                            <span className="item"></span>Inicio</a></li>
                            <li title="Registrar Pedidos Realizados por los Clientes">
                            <Link to = '/admin_ventas'>
                                <span className="icon"><i className="fas fa-search-dollar"></i></span>
                                <span className="item"></span>Informacion de Ventas
                            </Link>
                        </li>
                        <li title="Establecer el Estado Actual de una Venta">
                            <Link to = '/registro_estado_ventas'>
                                <span className="icon"><i className="fas fa-thermometer-three-quarters"></i></span>
                                <span className="item"></span>Estados de Ventas
                            </Link>
                        </li>
                        <li title="Ingresar Información de un Vendedor">
                            <Link to = '/admin_vendedores'>
                                <span className="icon"><i className="fas fa-id-card"></i></span>
                                <span className="item"></span>Información de Vendedores
                            </Link>
                        </li>
                        <li title="Restringir y Otorgar Accesos al Sistema">
                            <Link to = '/admin_usuarios'>
                                <span className="icon"><i className="fas fa-users-cog"></i></span>
                                <span className="item"></span>Gestión de Usuarios y Roles
                            </Link>
                        </li>
                        <li title="Salir del Sistema">
                            <Link to = '/'>
                                <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                                <span className="item"></span>Salir
                            </Link>
                        </li>
                    </ul>
                   
                </div>

                <div className="principal">
                    <div className="topNavBar">
                        <div className="hamburger">
                            <a href="#"><i className="fas fa-bars"></i></a>
                        </div>

                        <div className="iconCompany">
                            <img src= {logoheader} alt="logo header" height="50px"/> 
                        </div>
                    </div>

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
                                        <td>Gestion de Información de Vendedores</td>
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
                                        <td><a href="#"><input className="botons" type="submit" value="Buscar Usuario"/></a></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer">
                        <img src= {footerloginV2} alt="footer" height="50px"/>
                        <img src= {footerloginV2} alt="footer" height="50px"/>
                    </div>
                </footer>
                
            </div>

        </div>
    )
}

export default AdminUsuariosPage;