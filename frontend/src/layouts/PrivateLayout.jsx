import {Sidebar} from '../components/Sidebar';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import '../styles/estilos.css'
import { Outlet } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAuth } from '../context/authContext';
import { REFRESH_TOKEN } from '../graphql/autenticacion/mutations';
import { useNavigate } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();
  const { authToken, setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(REFRESH_TOKEN);

  useEffect(() => {

    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/auth/login');
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);

  if (loadingMutation || loadingAuth) return <div>Loading...</div>;

  return (
    <div className = 'mainContainer'>
        <Header />
        {/* <Sidebar /> */}
        <main></main>
        <Outlet />
        <Footer />
    </div>
  );
};

export default PrivateLayout;