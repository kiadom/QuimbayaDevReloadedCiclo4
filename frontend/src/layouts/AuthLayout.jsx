import React from 'react';
import { Outlet } from 'react-router';

function AuthLayout ({ children }) {
  return (
    <div className='body-text'>
      <div className='flex w-full h-full'>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
          <main>{ children }</main>
        </div>
      </div>
    </div>
  );
};

export { AuthLayout };