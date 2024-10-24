import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contacts from "./routes/Users/Users";
import Login from "./routes/Authentication/login";
import Signup from "./routes/Authentication/signup";
import Protected from "./routes/protected";
import PokemonList from "./routes/Pokemons/pokemons";
import NewsList from "./routes/News/News";
import Weather from "./routes/Weather/Weather";
import UserProfile from "./routes/UserProfile/UserProfile";

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
      },
      {
        path: "weather",
        element: <Weather />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);