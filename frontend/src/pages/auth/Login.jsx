import React, { useEffect } from 'react';
import logo from '../../media/logoheader.png'
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from "../../hooks/useFormData";
import { useMutation } from "@apollo/client";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from "../../graphql/autenticacion/mutations";

const Login = () => {
    const navigate = useNavigate();
    const { setToken } = useAuth();
    const { form, formData, updateFormData } = useFormData();

    const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
        useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();

        login({
            variables: formData,
        });
    };

    useEffect(() => {
        if (dataMutation) {
            if (dataMutation.login.token) {
                setToken(dataMutation.login.token);
                navigate('/');
            }
        }
    }, [dataMutation, setToken, navigate]);

    return (
        <div className='body-text'>
            <div className='login'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <form className='logueo' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                    <div>
                        <p><Input name='correo' type='email' label='Correo' placeholder='Correo' required={true} /></p>
                        <p><Input name='contrasena' type='password' label='Contraseña' required={true} /></p>
                    </div>
                    <ButtonLoading
                        disabled={Object.keys(formData).length === 0}
                        loading={mutationLoading}
                        text='Iniciar Sesión'                    
                    />
                </form>
                <div className='abrircuenta'>
                    <span>¿No tienes una cuenta?</span>
                </div>
                <div className='registroLogin'>
                    <Link to='/auth/registro'>
                        <span>Regístrate</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;