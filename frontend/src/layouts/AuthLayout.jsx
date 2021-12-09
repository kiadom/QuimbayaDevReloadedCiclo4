import React from 'react';
import { Outlet } from 'react-router';

function AuthLayout ({ children }) {
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <div className='flex w-full h-full'>
        <div className='w-full h-full  overflow-y-scroll'>
          <h1>Este es el AuthLayout</h1>
          <h1>Este es el AuthLayout</h1>
          <h1>Este es el AuthLayout</h1>
          <h1>Este es el AuthLayout</h1>
          <Outlet />
          <main>{ children }</main>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };