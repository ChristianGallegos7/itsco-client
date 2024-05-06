import { Link } from "react-router-dom";
import { Icon } from "../icons/Icon";
import { useState } from "react";
import axios from "axios";

export const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    rol: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/usuarios",
        formData
      );

      if (response.status === 200) {
        // La solicitud se realizó con éxito
        console.log("Usuario registrado correctamente.");
      } else {
        // Ocurrió un error al registrar el usuario
        console.error("Error al registrar usuario:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/registrar.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-rose-700" to={"/"}>
              <span className="sr-only">Home</span>
              <Icon />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Registro a DevJobs💻
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              El mejor lugar para buscar empleo en la industria tecnológica.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-rose-600 sm:size-20 dark:bg-gray-900"
                to={"/"}
              >
                <span className="sr-only">Home</span>
                <Icon />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                Registro a DevJobs💻
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                El mejor lugar para buscar empleo en la industria tecnológica.
              </p>
            </div>

            <form
              className="mt-8 grid grid-cols-6 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Apellido
                </label>

                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="rol"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Rol
                </label>

                <select
                  name="rol"
                  id="rol"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  <option>-- Seleccione --</option>
                  <option value="1">Usuario</option>
                  <option value="2">Empresa</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-md border-2 p-2 border-rose-700 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500 dark:hover:bg-rose-700 dark:hover:text-white">
                  Crea una Cuenta
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  Ya tienes una cuenta?
                  <Link to={"/login"} className="text-rose-900">
                    {" "}
                    Inicia Sesión
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
