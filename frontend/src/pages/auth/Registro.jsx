import React, { useEffect } from 'react';

import useFormData from "../../hooks/useFormData";
import { Link } from "react-router-dom";
import { REGISTRO } from "../../graphql/autenticacion/mutations";
import { useMutation } from "@apollo/client";
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';
import { Enum_Rol } from '../../utils/enums';
import ButtonLoading from '../../components/ButtonLoading';

const Registro = () => {
  const { form, formData, updateFormData } = useFormData();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [registro, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REGISTRO);

  const submitForm = (e) => {
    e.preventDefault();
    registro({ variables: formData });
  };

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.registro.token) {
        setToken(dataMutation.registro.token);
        navigate('/auth/login');
      }
    }
  }, [dataMutation, setToken, navigate]);

  return (
    <div className='login'>
      <h1>Regístrate</h1>
      <form className='logueo' onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div>
          <p><Input label='Nombre:' name='nombre' type='text' required /></p>
          <p><Input label='Apellido:' name='apellido' type='text' required /></p>
          <p><Input label='Documento:' name='identificacion' type='text' required /></p>
          <p><DropDown label='Rol deseado:' name='rol' required={true} options={Enum_Rol} /></p>
          <p><Input label='Correo:' name='correo' type='email' required /></p>
          <p><Input label='Contraseña:' name='contrasena' type='password' required /></p>
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={false}
          text='Registrarme'
        />
      </form>
      <span className='abrircuenta'>¿Ya tienes una cuenta?</span>
      <div className='registroLogin'>
        <Link to='/auth/login'>
          <span>Inicia sesión</span>
        </Link>
      </div>

    </div>
  );
};

export default Registro;