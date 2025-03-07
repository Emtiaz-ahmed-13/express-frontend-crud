
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DisplayUser from "./components/DisplayUser";
import PostUser from "./components/PostUser";
import UpdateUser from "./components/UpdateUser";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser />,
  },
  {
    path: "/users",
    element: <DisplayUser />,
    loader: () => fetch(`http://localhost:5001/users`),
  },
  {
    path: "/users/:id",
    element: <UpdateUser />,
    loader: ({ params }) => {
      console.log(params);
      return fetch(`http://localhost:5001/users/${params.id}`);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
