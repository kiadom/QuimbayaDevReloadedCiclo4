import { useParams, Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../hooks/useFormData";

import { GET_PROYECTO } from '../graphql/proyectos/queries';
import { EDITAR_PROYECTO } from "../graphql/proyectos/mutations"

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectosEditar () {

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN data */
    const { _id } = useParams();
    const { data: queryData } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const { form, formData, updateFormData } = useFormData();
    const [editarProyecto, { data: mutationData }] = useMutation(EDITAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
            variables: { _id, ...formData },
        });
    };
    
    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    return (
        <div className = "body-text">
            <table>
                <tr>
                    <td>
                        <Link to = {`/GestionProyectos`}>
                            <button onClick={() => {}}> Regresar al Listado de Proyectos </button>
                        </Link>
                    </td>
                </tr>
            </table>
            <h1>ID del Proyecto Seleccionado: { _id }</h1>
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
                                // defaultValue = { mutationData.Proyecto.nombre } 
                                type = "text" 
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
                                // defaultValue = { mutationData.Proyecto.objetivo[0].descripcion } 
                                type = "text" 
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
                                // defaultValue = { mutationData.Proyecto.objetivo[1].descripcion, " / ", datosProyectoSeleccionado.Proyecto.objetivo[2].descripcion }
                                type = "text" 
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
                                // defaultValue = { mutationData.Proyecto.presupuesto } 
                                type = "text" 
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