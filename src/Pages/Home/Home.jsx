import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../Component/Product/Product";

export default function Home() {
  const [categories, setCategories] = useState([]);

  const getCatgories = async () => {
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => setCategories(res.data.meals))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCatgories();
  }, []);

  return (
    <div className="my-10">
      <header className="mb-10">
        <h1 className={styles.header}>Learn, Cook, Eat Your Food</h1>
      </header>
      <ul className={`${styles.category} home-links`}>
        <li>
          <NavLink to={"/"} className={styles.allMeals}>
            All
          </NavLink>
        </li>
        {categories.map((category, i) => (
          <li key={i}>
            <NavLink to={"/"} className={styles.allMeals}>
              {category.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
      <Product />
    </div>
  );
}
