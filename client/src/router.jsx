import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { NavLayout } from "./NavLayout";
import { User } from "./pages/User";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="posts" />,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/posts", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
          });
        },
      },
      {
        path: "users",
        element: <Users />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/users", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
          });
        },
      },
      {
        path: "todos",
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/todos", {
            signal,
          }).then((res) => {
            if (res.status === 200) return res.json();
          });
        },
      },
    ],
  },
  { path: "post", element: <Post /> },
  { path: "user", element: <User /> },
]);
