import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { productId } = useParams();
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkValidId = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`
      );

      if (res.data.meals && res.data.meals.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
      console.log(isValid);
    } catch (err) {
      console.log(err);
      setIsValid(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkValidId();
  }, [productId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isValid) {
    return <Navigate to="/notfound" />;
  }

  return children;
}
