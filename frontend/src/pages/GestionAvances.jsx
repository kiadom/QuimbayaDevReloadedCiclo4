import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCES, GET_AVANCES2 } from '../graphql/avances/querys';


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const GestionAvances = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Listado de Avances' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data */
    const { data } = useQuery(GET_AVANCES2);
    const { consulta2 } = useQuery(GET_AVANCES);//no los esta trayendo

    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCES2", data);
    }, [data]);
    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCES", data);
    }, [consulta2]);

    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Avance" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Avance');
        }
        else {
            setTextoBoton('Ver Listado de Avances');
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
            { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) : (<FormularioRegistroAvances />)}

        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL LISTADO DE AVANCES */
const TablaAvances = ({ listaAvances }) => {
    return (
        <div>
            <h1>Lista de Avances</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Proyecto</th>
                        <th>Fecha</th>
                        <th>Descripcion Avance</th>
                        <th>Observaciones Lider</th>
                    </tr>
                </thead>
                <tbody>
                    { listaAvances && 
                        listaAvances.Avances.map((a) => {
                            return (
                                <tr key = { a._id }>
                                    <td>{ a.proyecto.nombre }</td>
                                    <td>{ a.fecha }</td>
                                    <td>{ a.descripcion }</td>
                                    <td>{ a.observacionesLider }</td>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
        </div>
    )
}

/* FUTURA FUNCION PARA CREAR UN PROYECTO, SE DEBE INVOCAR AL DAR CLIC SOBRE EL BOTON EN LA INTERFAZ DEL FORMULARIO */
const CrearProyecto = () => {
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioRegistroAvances = ()=> {
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
                            <p>Descripcion: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type = "button" value = "Registrar Avance" />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export { GestionAvances };
