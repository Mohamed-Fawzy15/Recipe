import { NavLink, useLocation, useParams } from "react-router-dom";
import styles from "./Home.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../Component/Product/Product";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const categoryName =
    new URLSearchParams(location.search).get("category") || "";

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
        <h1 className={`${styles.header} Pacifico`}>
          Learn, Cook, Eat Your Food
        </h1>
      </header>
      <ul className={`${styles.category} home-links`}>
        <li>
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive && categoryName === ""
                ? `${styles.allMeals} active`
                : `${styles.allMeals} `
            }
          >
            All
          </NavLink>
        </li>
        {categories.map((category, i) => (
          <li key={i}>
            <NavLink
              to={`/?category=${category.strCategory}`}
              className={({ isActive }) =>
                isActive && categoryName === category.strCategory
                  ? `${styles.allMeals} active`
                  : `${styles.allMeals} `
              }
            >
              {category.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
      <Product selectedCategory={categoryName} />
    </div>
  );
}
