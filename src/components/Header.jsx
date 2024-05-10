import { Link } from "react-router-dom";
import { Icon } from "../icons/Icon";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-rose-600 dark:text-rose-600" href="#">
          <span className="sr-only">Home</span>
          <Icon/>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-3xl font-black"
                  to={'/'}
                >
                  DevJobs
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-rose-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-700 dark:hover:bg-rose-500"
                to={'/login'}
              >
                Iniciar Sesión
              </Link>

              <Link
                className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                to={'/registro'}
              >
                Crear Cuenta
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:hidden">
            <Link
              className="block rounded-md bg-rose-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-700 dark:hover:bg-rose-500"
              to={'/login'}
            >
              Iniciar Sesión
            </Link>

            <Link
              className="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              to={'/registro'}
            >
              Crear Cuenta
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
