import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contacts from "./routes/contacts";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Protected from "./routes/protected";
import PokemonList from "./routes/pokemons";
import NewsList from "./routes/News";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <Protected>
        <Root />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "pokemons",
        element: <PokemonList />,
      },
      {
        path: "news",
        element: <NewsList />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);