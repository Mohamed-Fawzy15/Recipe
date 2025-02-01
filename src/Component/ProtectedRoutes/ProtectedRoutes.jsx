import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { productId } = useParams();

  console.log(productId);

  if (!productId) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
