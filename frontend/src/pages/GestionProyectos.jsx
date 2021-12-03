import React, { useEffect, useState } from "react";

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const GestionProyectos = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Listado de Proyectos' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Proyecto" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Proyecto');
        }
        else {
            setTextoBoton('Ver Listado de Proyectos');
        }
    },[mostrarTabla]);

    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    return (
        <div className="body-text">

            <button onClick = {() => {
                setMostrarTabla (!mostrarTabla);
                }}
            >{ textoBoton }</button>
            { mostrarTabla ? (<TablaProyectos/>) : (<FormularioRegistroProyectos />)}

        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE PROYECTOS */
const TablaProyectos = () => {
    return (
        <div>
            <h1>Lista de Proyectos</h1>
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
            </table>
        </div>
    )
}

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroProyectos = ()=> {
    return (
        <div>
            <h1>Ingrese el Proyecto</h1>
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
