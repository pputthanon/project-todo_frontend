import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser) {
    return <Navigate to="/homepage" />;
  }

  return children;
}

export default RedirectIfAuthenticated;
