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
        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              return fetch("http://localhost:3000/posts", {
                signal,
              });
            },
          },
          {
            //TODO
            path: ":postId",
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/posts/${params.postId}`, {
                signal,
              });
            },
            element: <Post />,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: ({ request: { signal } }) => {
              return fetch("http://localhost:3000/users", {
                signal,
              });
            },
          },
          {
            path: ":userID",
            element: <User />,
            loader: ({ params, request: { signal } }) => {
              return fetch(`http://localhost:3000/users/${params.userID}`, {
                signal,
              });
            },
          },
        ],
      },
      {
        path: "todos",
        element: <Todos />,
        loader: ({ request: { signal } }) => {
          return fetch("http://localhost:3000/todos", {
            signal,
          });
        },
      },
    ],
  },
]);
