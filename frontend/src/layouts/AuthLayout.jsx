import React from 'react';
import { Outlet } from 'react-router';

function AuthLayout ({ children }) {
  return (
    <div className='body-text'>
      <div className='contenedorfoto'>
          <Outlet />
          <main>{ children }</main>
      </div>
    </div>    
  );
};

export { AuthLayout };