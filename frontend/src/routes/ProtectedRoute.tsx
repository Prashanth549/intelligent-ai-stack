import { Navigate } from "react-router-dom";
import { JSX } from "react/jsx-runtime";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;