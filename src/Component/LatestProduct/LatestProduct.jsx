import { BiWorld } from "react-icons/bi";
import styles from "./LAtestProduct.module.scss";

export default function LatestProduct({ product }) {
  return (
    <div className={styles.productContent} key={product.idMeal}>
      <img src={product.strMealThumb} alt="meal name" className={styles.img} />
      <h2>{product.strMeal}</h2>
      <div className="text-green-400 my-3">
        <BiWorld className="inline me-3" />
        {product.strArea}
      </div>
      <button className={styles.btn}>view recipe</button>
    </div>
  );
}
