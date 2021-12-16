import React from 'react';

import { Outlet } from 'react-router';

function AuthLayout () {
  return (
    <div className='contenedorfoto'>        
          <Outlet />
          <main></main>
      </div>      
  )
};

export { AuthLayout };