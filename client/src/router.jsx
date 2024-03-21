import {
  Navigate,
  Outlet,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
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
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/posts", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
            throw redirect("/pages/users"); //to change
          });
        },
      },
      {
        path: "/pages/users",
        element: <Users />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/users", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
            throw redirect("/pages/users"); //to change
          });
        },
      },
      {
        path: "/pages/todos",
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/todos", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
            throw redirect("/pages/users"); //to change
          });
        },
      },
    ],
  },
]);
