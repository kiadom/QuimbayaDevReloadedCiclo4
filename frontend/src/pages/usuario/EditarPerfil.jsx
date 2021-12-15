import React from 'react'
import { useUser } from '../../context/userContext'
import { NavLink } from "react-router-dom";


    
const EditarPerfil = () => {
    const { userData } = useUser

    return (
        <div className="rp_formulario">
            <h1 className="rp_subtitulo">Editar perfil</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Información básica</th>
                        <th></th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="proyectos">
                        <td>carlos</td>
                        <td>huey</td>
                        <td>
                            <NavLink to={`/GestionProyectos/Editar/`}>
                                <button onClick={() => { }}> Actualizar </button>
                            </NavLink>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default EditarPerfil
