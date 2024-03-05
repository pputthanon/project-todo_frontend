import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../auth/Authenticated";
import RedirectIfAuthenticated from "../auth/RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [{ path: "homepage", element: <Homepage /> }],
  },
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <Layout />
      </RedirectIfAuthenticated>
    ),
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
