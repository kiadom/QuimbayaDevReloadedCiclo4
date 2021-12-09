import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVANCES2 } from "../../graphql/avances/querys";
import { useParams, Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import Input from "../../components/Input";
import useFormData from "../../hooks/useFormData";


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
const DetalleAvances = () => {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Listado de Avances' );
    const [detallarAvance, setdetallarAvance] = useState(true);

    /*PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
    const { _id } = useParams();
    const { data } = useQuery(GET_AVANCES2,{
        variables:{ _id },
    });

    useEffect(() => {
        console.log("Datos obtenidos con GET_AVANCES2", data);
    }, [data]);
    
    /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Avance" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (detallarAvance) {
            setTextoBoton('Registrar Nuevo Avance');
        }
        else {
            setTextoBoton('Ver Detalle del Avance');
        }
    },[detallarAvance]);

    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    return (
        <div className="body-text">
            <button onClick = {() => {
                setdetallarAvance (!detallarAvance);
                }}
            >{ textoBoton }</button>
            { detallarAvance ? (<TablaAvances listaAvances = { data }/>) : (<FormularioRegistroAvances />)}
        </div>
    );
};


/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA LA TABLA QUE MUESTRA EL DETALLE DEL AVANCE */
const TablaAvances = () => {
    return (
        <div>
            <h1>Detalle de Avances</h1>
{/*
            <table>
                    <thead>
                        <tr>
                            <th>ID Avance</th>
                            <th>Fecha</th>
                            <th>Titulo Avance</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                                <tr key = { p.proyecto }>
                                    <td>{ p._id }</td>
                                    <td>{ p.fecha }</td>
                                    <td>{ p.titulo }</td>
                                    
                                    <td>
                                        <Link to = {`/avances/DetalleAvances/${p._id}` }>
                                           
                                            Detalles Avance
                                        </Link> 
                                    </td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
*/}

           
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
            <h1>Ingrese el Avance</h1>
            <form>
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
                            <input type = "button" value = "Guardar Avance" />
                        </td>
                    </tr>
                
            </form>
        </div>
    )
}

export { DetalleAvances };
