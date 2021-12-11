import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { useUser } from '../../context/userContext';

import useFormData from "../../hooks/useFormData";
import  ButtonLoading from '../../components/ButtonLoading';



import { GET_AVANCESPORPROYECTO } from "../../graphql/avances/queries";
import { CREAR_AVANCE } from "../../graphql/avances/mutations";

function AvancesPorProyecto () {

    /* ESTADOS QUE PERMITEN CONTROLAR LA VISIBILIDAD DE LAS INTERFACES */
    const [textoBoton, setTextoBoton] = useState('Ver Avances Reportados' );
    const [mostrarTabla, setMostrarTabla] = useState(true);

    const { proyecto } = useParams();
    const { data, loading } = useQuery(GET_AVANCESPORPROYECTO,{
        variables:{ proyecto }
    });

    
    

        /* SE DEFINE EL TEXTO DEL BOTON, INICIALMENTE SERÁ "Registrar Avance" Y MOSTRARÁ LA INTERFAZ DE TABLA*/
    useEffect(()=>{
        if (mostrarTabla) {
            setTextoBoton('Registrar Avance');
        }
        else {
            setTextoBoton('Ver Avances Reportados');
        }
    },[mostrarTabla]);


    if (!loading){
        return (
            <div className = "body-text">
                <div className="rp_titulo">GESTIÓN DE AVANCES</div>
                <div className="rend_Dinamica">
                    <button onClick = {() => {
                        setMostrarTabla (!mostrarTabla);
                        }}
                        className="boton_1">{ textoBoton }
                    </button>
            { mostrarTabla ? (<TablaAvances listaAvances = { data }/>) : (<FormularioRegistroAvances listaAvances = { data } />)}
            </div>
            </div>
        );
    }        

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};


const TablaAvances = ({ listaAvances }) => {
    return (
        <div className="rp_formulario">
            <h1>Lista de Avances del Proyecto</h1>
           

                <table className="table">
                    <thead>
                        <tr>
                            <th>Proyecto</th>
                            <th>ID Avance</th>
                            <th>Titulo Avance</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                                <tr key = { p.proyecto }>
                                    <td>{ p.proyecto.nombre }</td>
                                    <td>{ p._id }</td>
                                    <td>{ p.titulo }</td>
                                    
                                    <td>
                                        <button>
                                        <Link to = {`/avances/DetalleAvances/${p._id}` }>
                                           
                                            Detalles Avance
                                        </Link> 
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
        </div>
    )
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS AVANCES */
const FormularioRegistroAvances = ()=> {

    const { form, formData, updateFormData } = useFormData();
    const [CrearAvance] = useMutation(CREAR_AVANCE);
    const { userData } = useUser();
    

    const submitForm = (e) => {
        e.preventDefault();
        CrearAvance({ 
            variables: {...formData, 
                fecha: "2020/10/25",
                } 
        });
    };
    return (
        <div className="rp_formulario">
                {/*
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Avance</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { listaAvances && 
                        listaAvances.AvancesPorProyecto.map((p) => {
                            return (
                                <tr key = { p.proyecto }>
                                    <td>{ p.proyecto._id }</td>
                                 </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
                    */}
        <h1>Ingrese el Avance</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                <table>
                    <tr>
                        <td>
                            <p>Fecha: </p>
                        </td>
                        <td>
                            <input type = "date" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Titulo: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Detalle de Avance: </p>
                        </td>
                        <td>
                            <input type = "text" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Proyecto: </p>
                        </td>
                        <td>
                            <input 
                                type = "text" required
                               
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <td>
                            <input className="boton_1"
                                type = "submit" 
                                value = "Registrar Nuevo Proyecto" 
                            />
                        </td>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
};


export {AvancesPorProyecto} ;