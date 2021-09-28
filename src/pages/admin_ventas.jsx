import Footer from "../components/Footer";
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";

function AdminVentasPage(){
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="EncabezadoModulo">
                        <span className="icon"><i className="fas fa-search-dollar fa-5x"></i></span>
                        <h3>GESTION DE LA INFORMACION DE VENTAS</h3>
                    </div>
                    <Sidebar />
                </div>
                <div className="principal">
                    <Header />

                    <div className="Menu">
                        <div className="rp_titulo">GESTION DE LA INFORMACION DE VENTAS</div>
                        <div className="rp_subtitulo">INGRESE LA INFORMACION DEL PEDIDO</div>
                        
                        <form className="rp_formulario1" id="formulario" method="POST" action="data.php">
                            <table className="tabla">
                                <tr>
                                    <td><p>Venta ID:</p></td>
                                    <td><p><input className="input" type="text" id="venta_id" name="venta_id" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Venta Total: </p></td>
                                    <td><p><input className="input" type="number" id="venta_total" name="venta_total" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Detalle: </p></td>
                                    <td><p><input className="input" type="text" id="detalle" name="detalle" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Fecha de Pago: </p></td>
                                    <td><p><input className="input" type="date" id="fecha_de_pago" name="fecha_de_pago" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Fecha de Pago Futura:&emsp;&emsp;</p></td>
                                    <td><p><input className="input" type="date" id="fecha_de_pago_futura" name="fecha_de_pago_futura" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><p>Responsable: </p></td>
                                    <td><p><input className="input" type="text" id="responsable" name="responsable" size="30"/></p></td>
                                </tr>
                                <tr>
                                    <td><br/></td>
                                    <td><br/></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <button className="boton" type="button" onclick="ingresarPedido()">Ingresar Pedido</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminVentasPage;