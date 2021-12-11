import { useParams, Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../hooks/useFormData";

import { GET_PROYECTO } from '../graphql/proyectos/queries';
import { EDITAR_PROYECTO } from "../graphql/proyectos/mutations"

/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function GestionProyectosEditar () {

    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    /* PLANTILLA PARA HACER LA PETICION GET DE PROYECTOS. EL RETORNO SE ALMACENA EN queryData. loadingData PERMITE CONTROLAR CUANDO SE CARGA EL QUERY  */
    const { data: queryData, loading: queryLoading } = useQuery(GET_PROYECTO, {
        variables: { _id },
    });

    const [editarProyecto, { data: mutationData, loading: mutationLoading }] = useMutation(EDITAR_PROYECTO);

    const submitForm = (e) => {
        e.preventDefault();
        editarProyecto({
            variables: { _id, ...formData, presupuesto: parseFloat(formData.presupuesto) },
        });
    };

    /* SI loading ES FALSO, ES DECIR SI YA NO ESTÁ CARGANDO, SE RENDERIZA EL FORMULARIO PARA EDITAR EL PROYECTO SELECCIONADO */
    if(!queryLoading){
        return (
            <div className = "body-text">
                <div className ="rp_titulo">GESTIÓN DE PROYECTOS</div>
                <table>
                    <tr>
                        <td>
                            <Link to = {`/GestionProyectos`}>
                                <button onClick={() => {}} className = "boton_1"> Regresar al Listado de Proyectos </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                <h1 className = "rp_subtitulo">Ingrese los nuevos datos del Proyecto</h1>
                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                    <table>
                        <tr>
                            <td>
                                <p>Nombre: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'nombre' 
                                    defaultValue = { queryData.Proyecto.nombre } 
                                    type = "text" 
                                    size = "50"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Objetivo General: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'objetivoGeneral' 
                                    defaultValue = { queryData.Proyecto.objetivoGeneral } 
                                    type = "text" 
                                    size = "50"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Objetivo Especifico (1): </p>
                            </td>
                            <td>
                                <input 
                                    name = 'objetivoEspecifico1' 
                                    defaultValue = { queryData.Proyecto.objetivoEspecifico1 }
                                    type = "text" 
                                    size = "50"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Objetivo Especifico (2): </p>
                            </td>
                            <td>
                                <input 
                                    name = 'objetivoEspecifico2' 
                                    defaultValue = { queryData.Proyecto.objetivoEspecifico2 }
                                    type = "text" 
                                    size = "50"
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
                                    defaultValue = { queryData.Proyecto.presupuesto } 
                                    type = "number"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input className = "boton_1"
                                    type = "submit" 
                                    value = "Guardar cambios" 
                                />
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }

    /* SI loading ES VERDADERO, ES DECIR SI ESTÁ CARGANDO, SE MUESTRA UN MENSAJE INFORMANDO AL USUARIO DE ESTO */
    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
};

export { GestionProyectosEditar };