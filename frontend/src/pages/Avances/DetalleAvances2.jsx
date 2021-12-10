import { useParams, Link } from "react-router-dom";

import { useMutation, useQuery } from '@apollo/client';
import useFormData from "../../hooks/useFormData";

import { GET_AVANCES2 } from "../../graphql/avances/queries";
import { EDITAR_AVANCE } from "../../graphql/avances/mutations";


/* FUNCION PRINCIPAL QUE SE EJECUTA, DESDE ACA SE LLAMAN LAS DEMAS FUNCIONES Y SE DEFINEN LOS ESTADOS */
function DetalleAvances () {
    
    const { form, formData, updateFormData } = useFormData();
    const { _id } = useParams();

   /*PLANTILLA PARA HACER LA PETICION GET DE AVANCES. EL RETORNO SE ALMACENA EN data */
    const { data: queryData, loading } = useQuery(GET_AVANCES2, {
        variables:{ _id },
    });

       
    const [editarAvance, { data: mutationData }] = useMutation(EDITAR_AVANCE);

    const submitForm = (e) => {
        e.preventDefault();
        editarAvance({
            variables: { _id, ...formData },
        });
    };

     
    if(!loading){
        return (
            <div className = "body-text">
                <table>
                    <tr>
                        <td>
                            <Link to = {``}>
                                <button onClick={() => {}}> Regresar al Listado Avances del Proyecto </button>
                            </Link>
                        </td>
                    </tr>
                </table>
                
                <h1>ID del Avance Seleccionado: { _id }</h1> 
                
                <h1>Ingrese los nuevos datos del Avance</h1>
                <form onSubmit = { submitForm } onChange = { updateFormData } ref = { form }>
                    <table>
                        
                        <tr>
                            <td>
                                <p>Titulo: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvances.titulo }
                                
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>ID Del Avance: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvances._id }
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <p>Creado Por: </p>
                            </td>
                            <td>
                               { (queryData.DetalleAvances.creadoPor.nombre) + " " + (queryData.DetalleAvances.creadoPor.apellido) } 
                                
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Descripcion: </p>
                            </td>
                            <td>
                                <input 
                                    name = 'descripcion' 
                                    defaultValue = { queryData.DetalleAvances.descripcion } 
                                    type = "text" 
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Observaciones Lider: </p>
                            </td>
                            <td>
                                { queryData.DetalleAvances.observacionesLider } 
                                
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
    }
    

    return (
        <div className = "body-text">
            <h1>Cargando</h1>
        </div>
    );
    
    /* EN ESTE RETURN VA EL BOTON QUE PERMITE CAMBIAR DE INTERFAZ. 
    AL DAR CLIC SOBRE ESTE, CAMBIA EL ESTADO DE mostrarTabla, LLAMANDO ASI AL FORMULARIO*/
    
};


export { DetalleAvances };
