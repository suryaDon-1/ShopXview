import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const { user, loading } = useSelector(
    (state) => state.auth
  );
  console.log(user)

  // wait until auth check finishes
  if (loading) {
    return <div>Loading...</div>;
  }

  // if not logged in
  if (!user) {
    return <Navigate to="/siginin" replace />;
  }

  return children;
}

export default ProtectedRoute;