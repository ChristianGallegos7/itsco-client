import { createBrowserRouter } from "react-router-dom";
import { Principal } from "./views/Principal";
import { Login } from "./views/Login";
import { Registro } from "./views/Registro";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registro',
        element: <Registro/>
    }
]);