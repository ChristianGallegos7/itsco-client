import { createBrowserRouter } from "react-router-dom";
import { Principal } from "./views/Principal";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal/>
    }
]);