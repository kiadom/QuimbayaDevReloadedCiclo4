import '../styles/style2.css';

function index_page(){
    return <div>
               
                <div class="container overflow-hidden" id="grid">
                <div class="row gy-5">
                    <div class="col-6">  
                    <div class="p-3 bg-light">
                        <a href="admin_ventas.html">  <img src="images/gestion-ventas.png" alt="" width="100" height="100"/></a>
                        Gestion de Ventas</div>
                    </div>
                    
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <a href="registro_estado_ventas.html"><img src="images/estado-ventas.png" alt="" width="100" height="100"/></a>
                        Estado de Ventas</div>
                    </div>
                    
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <a href="admin_usuarios.html"><img src="images/gestion-usuario.png" alt="" width="100" height="100"/></a>
                        Gestion de Usuarios</div>
                    </div>
                    <div class="col-6">
                    <div class="p-3 bg-light">
                        <a href="admin_vendedores.html"><img src="images/gestion-informacion.png" alt="" width="100" height="100"/></a>
                        Gestion de Información</div>
                    </div>
                </div>
                </div>
            </div>   
}

export default index_page;