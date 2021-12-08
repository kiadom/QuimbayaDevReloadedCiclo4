import { useParams } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { useFormData } from "../hooks/useFormData";

import { GET_PROYECTO } from '../graphql/proyectos/queries';
import { CREAR_PROYECTO } from "../graphql/proyectos/mutations"

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectosEditar () {

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data */
    const { _id } = useParams();
    const { data } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    return (
        <div className = "body-text">
            <FormularioEdicionProyectos idProyectoSeleccionado = { _id } datosProyectoSeleccionado = { data }/>
        </div>
    );
};

/* FUNCION QUE CONTIENE LA INTERFAZ DONDE SE ENCUENTRA EL FORMULARIO PARA REGISTRAR LOS PROYECTOS */
const FormularioEdicionProyectos = ({ idProyectoSeleccionado, datosProyectoSeleccionado })=> {  

    const { form, formData, updateFormData } = useFormData();
    const [crearProyecto ] = useMutation(CREAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        crearProyecto({ variables: formData });
    };
    
    return (
        <div>
            <h1>ID del Proyecto Seleccionado: { idProyectoSeleccionado }</h1>
            <h1>Ingrese los nuevos datos del Proyecto</h1>
            <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                <table>
                    <tr>
                        <td>
                            <p>Nombre: </p>
                        </td>
                        <td>
                            <input 
                                name = 'nombre' 
                                // defaultValue = { datosProyectoSeleccionado.Proyecto.nombre } 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivo General: </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivo_general' 
                                // defaultValue = { datosProyectoSeleccionado.Proyecto.objetivo[0].descripcion } 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Objetivos Especificos: </p>
                        </td>
                        <td>
                            <input 
                                name = 'objetivos_especificos' 
                                // defaultValue = { datosProyectoSeleccionado.Proyecto.objetivo[1].descripcion }
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Presupuesto: </p>
                        </td>
                        <td>
                            <input 
                                name = 'presupuesto' 
                                // defaultValue = { datosProyectoSeleccionado.Proyecto.presupuesto } 
                                type = "text" 
                                required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type = "submit" 
                                value = "Guardar cambios" 
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
};

export { GestionProyectosEditar };