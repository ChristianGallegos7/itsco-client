import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="bg-[#6c584c] p-4 flex justify-between items-center">
      <h2 className="text-[#a98467] text-4xl font-bold">Dev<span className='text-[#f0ead2]'>Jobs</span></h2>
      <div className="space-x-4">
        <Link to="/login" className="text-white hover:text-[#3a342b] p-1">Iniciar Sesión</Link>
        <Link to="/registro" className="text-white hover:text-[#3a342b] p-1">Crear Cuenta</Link>
      </div>
    </nav>
  );
};
