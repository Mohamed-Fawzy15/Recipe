import { useEffect, useState } from "react";
import LatestProduct from "../LatestProduct/LatestProduct";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => setProducts(res.data.meals))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 mt-24">
      {products.map((product, i) => (
        <LatestProduct product={product} key={i} />
      ))}
    </div>
  );
}
