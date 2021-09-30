import Sidebar from "../components/Sidebar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars  } from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faSearchDollar, faThermometerThreeQuarters, faIdCard, faUsersCog, faSignOutAlt, faBars);

const RegistroEstadoVentasPage = () => {
    return (
        <div>
            <div className="wrapper">
                <Sidebar icono = {faThermometerThreeQuarters} titulo = 'REGISTRO DE ESTADO DE VENTAS'/>

                <div className= "principal">
                    <div className="Menu">
                        <div className="rp_titulo">REGISTRO DE ESTADO DE VENTAS</div>
                        <div className="rp_subtitulo">INGRESE EL ESTADO DE VENTAS</div>

                        <div className="rp_formulario1">
                            <form action=''>
                                <table className="tabla">
                                    <tr>
                                        <td><p>Venta ID:</p></td>
                                        <td><p><input className="input" type="text" id="venta_id" name="venta_id" size="30"/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Fecha creación pedido:</p></td>
                                        <td><p><input className="input" type="date" id="fecha_creación_pedido"name="fecha_creación_pedido" size="30"/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Fecha de Embalaje:</p></td>
                                        <td><p><input className="input" type="date" id="fecha_de_embalaje" name="fecha_de_embalaje" size="30"/></p></td>
                                    </tr>
                                    <tr>
                                        <td><p>Fecha de despacho:</p></td>
                                        <td><p><input className="input" type="date" id="fecha_de_despacho" name="fecha_de_despacho" size="30"/></p></td>
                                    </tr>
                                    <tr>
                                    <td><p>Ruta:</p></td>                
                                    <td><p><select className="select" id="ruta">
                                        <option selected disabled>Elija zona de entrega</option>
                                        <option value="norte">Norte</option>
                                        <option value="oriente">Oriente</option>
                                        <option value="sur">Sur</option>
                                        <option value="occidente">Occidente</option>
                                    </select></p></td>              
                                    </tr>
                                    <tr>
                                    <td></td>
                                    <td>
                                        <button className="boton" type="button" onclick='ingresarEstado()'>INGRESAR ESTADO</button>
                                    </td>
                                </tr>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroEstadoVentasPage;