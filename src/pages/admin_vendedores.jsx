import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const AdminVendedoresPage = () => {
    return (
        <div>
            <div className="wrapper">
                <Sidebar icono = {faSearchDollar} titulo = 'GESTION DE INFORMACION DE VENDEDORES'/>
                        
                <div className="principal">
                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE LA INFORMACION DE VENDEDORES</div>
                        <div className="rp_subtitulo">INGRESE LA INFORMACION DEL VENDEDOR</div>
                
                        <form className="rp_formulario1" id="formulario" method="POST" action="">
                            <div className="form-seller">
                                <div className="d-flex align-content-start flex-wrap justify-content-center">
                                    <form action="">
                                        <table className="tabla">
                                            <tr>
                                                <td>ID Vendedor:</td>
                                                <td><input className="input" type="text" name="id-vendedor" placeholder="Id Vendedor" size="30"/></td>
                                                <td>Cedula:</td>
                                                <td><input className="input" type="text" name="cedula-vendedor" placeholder="Cedula Vendedor" size="30"/></td>
                                            </tr>
                                            <tr>
                                                <td>Nombres:</td>
                                                <td><input className="input" type="text" name="nombres-vendedor" placeholder="Nombres Vendedor" size="30"/></td>
                                                <td>Apellidos:</td>
                                                <td><input className="input" type="text" name="apellidos-vendedor" placeholder="Apellidos Vendedor" size="30"/></td>
                                            </tr>
                                            <tr>
                                                <td>Direccion:</td>
                                                <td><input className="input" type="text" name="direccion-vendedor" placeholder="Direccion Vendedor" size="30"/></td>
                                                <td>Telefono:</td>
                                                <td><input className="input" type="text" name="telefono-vendedor" placeholder="Telefono Vendedor" size="30"/></td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td><input className="input" type="text" name="email-vendedor" placeholder="Email Vendedor" size="30"/></td>
                                                <td>Estado:</td>
                                                <td><select id="estado-vendedor" required className="input" name="estado-vendedor" >
                                                    <option selected disabled>Estado Vendedor</option>
                                                    <option value="1">Activo</option>
                                                    <option value="2">Inactivo</option>
                                                </select></td>
                                            </tr>
                                            <br />
                                            <br />
                                        </table>
                                        <table>                               
                                            <tr>
                                                <td>
                                                    <button className="boton" type="submit">Aceptar</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminVendedoresPage;