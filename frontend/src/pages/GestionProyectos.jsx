import React from 'react';

const GestionProyectos = () => {
    return (
        <div class="body-text">
            <h1>MODULO DE GESTION DE PROYECTOS</h1>
            {/* <input type = "button" value = "Registrar proyecto" />
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Objetivos</th>
                        <th>Presupuesto</th>
                        <th>Fechas</th>
                        <th>Nombre Lider</th>
                        <th>Estado</th>
                        <th>Fase</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table> */}
            <form>
                <table>
                    <tr>
                        <td>
                            <p>Nombre del Proyecto: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo General: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo Especifico: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Presupuesto: </p>
                        </td>
                        <td>
                            <input type = "number" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type = "button" value = "Registrar proyecto" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export { GestionProyectos };
