import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "homepage", element: <Homepage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },

  //   {
  //     path: "",
  //     element: <Layout />,
  //     children: [
  //       { path: "/login", element: <LoginPage /> },
  //       { path: "/register", element: <RegisterPage /> },
  //     ],
  //   },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
