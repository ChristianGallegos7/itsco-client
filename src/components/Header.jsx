import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="bg-blue-950 p-4 flex justify-between items-center">
      <h2 className="text-white text-4xl font-bold">Itsco<span className='text-blue-300'>Jobs</span></h2>
      <div className="space-x-4">
        <Link to="/login" className="text-white hover:text-blue-300">Iniciar Sesión</Link>
        <Link to="/signup" className="text-white hover:text-blue-300">Crear Cuenta</Link>
      </div>
    </nav>
  );
};
