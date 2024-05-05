import React from 'react';

export const Info = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-900 border-b-4 border-sky-500">Encuentra tu próximo empleo con ItscoJobs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src="/1.jpg" alt="Imagen 1" />
        <img className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src="/2.jpg" alt="Imagen 2" />
        <img className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src="/3.jpg" alt="Imagen 3" />
        <img className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" src="/4.jpg" alt="Imagen 4" />
      </div>

      <p className="text-lg mt-8 mb-4">Bienvenido a ItscoJobs, el mejor lugar para buscar empleo en la industria tecnológica. Ya sea que estés buscando tu primer trabajo en el sector o que quieras dar el próximo paso en tu carrera, estamos aquí para ayudarte a encontrar las mejores oportunidades laborales.</p>
      <p className="text-lg mb-4">En ItscoJobs, ofrecemos una amplia variedad de ofertas laborales en áreas como desarrollo web, inteligencia artificial, ciencia de datos, ciberseguridad y mucho más. Nuestro objetivo es conectar a profesionales talentosos con empresas innovadoras que buscan su experiencia y habilidades.</p>
      <p className="text-lg mb-4">Con nuestra plataforma fácil de usar, puedes explorar las últimas ofertas de empleo, crear un perfil profesional destacado, y postularte a las oportunidades que más te interesen. ¡No esperes más para dar el siguiente paso en tu carrera!</p>
      <p className="text-lg mb-4">Regístrate ahora en ItscoJobs y empieza a construir tu futuro profesional hoy mismo. ¡El trabajo de tus sueños te está esperando!</p>
    </div>
  );
};
