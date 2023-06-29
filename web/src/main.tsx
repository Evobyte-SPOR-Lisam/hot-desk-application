import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/sign-up-page";
import Header from "./components/main-screen";
import LogIn from "./components/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/sign-up-page",
    element: <SignUp />,
  },
  {
    path: "/login-page",
    element: <LogIn />,
  },
  {
    path: "/main-screen",
    element: <Header />,
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
