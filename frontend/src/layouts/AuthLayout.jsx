import React from 'react';

import { Outlet } from 'react-router';

function AuthLayout ({ children }) {
  return (
    <div className='contenedorfoto'>
        
          <Outlet />
          <main>{ children }</main>
      </div>
      
  );
};

export { AuthLayout };