import { Navigate, createBrowserRouter } from "react-router-dom";
import { NavbarMain } from "./NavbarMain";

export const router = createBrowserRouter([
    {
        element: <NavbarMain />,
        children: [
            {
                path: "*",
                element: <Navigate to="posts.html" />
            }
        ]
    }
]);
