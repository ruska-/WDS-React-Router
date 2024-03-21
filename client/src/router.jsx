import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { NavLayout } from "./NavLayout";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/pages/posts" />,
      },
      {
        path: "/pages/posts",
        element: <Posts />,
      },
      {
        path: "/pages/users",
        element: <Users />,
      },
      {
        path: "/pages/todos",
        element: <Todos />,
      },
    ],
  },
  {
    path: "/pages/posts",
    element: <Posts />,
  },
]);
