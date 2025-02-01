import { FaYoutube } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Ingredients.module.scss";

export default function Ingredients() {
  const { productId } = useParams();
  const [mealDetails, setMealDetails] = useState({});

  const getProductDetails = async () => {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productId}`)
      .then((res) => setMealDetails(res.data.meals[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <>
      <div className={styles.ingredients}>
        <div className={`${styles.header} w-full md:w-1/3 lg:w-2/3`}>
          <h1 className={`${styles.title} Pacifico`}>{mealDetails.strMeal}</h1>

          <div className="grid gap-4 items-stretch lg:grid-cols-2">
            <div>
              <img
                src={mealDetails.strMealThumb}
                className={styles.img}
                alt={mealDetails.strMeal}
              />
              <div className={styles.btns}>
                <button
                  className={styles.youtubeBtn}
                  onClick={() => window.open(mealDetails.strYoutube, "_blank")}
                >
                  <FaYoutube />
                  Youtube
                </button>
                <button
                  className={styles.sourceBtn}
                  onClick={() => window.open(mealDetails.strSource, "_blank")}
                >
                  <TfiWorld />
                  Source
                </button>
              </div>
            </div>
            <p>{mealDetails.strInstructions}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className={`${styles.ingredientsCard} `}>
            <h2 className={styles.ingredientsHeader}>Ingredients</h2>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient1}:</p>
              <span>{mealDetails.strMeasure1}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient2}:</p>
              <span>{mealDetails.strMeasure2}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient3}:</p>
              <span>{mealDetails.strMeasure3}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient4}:</p>
              <span>{mealDetails.strMeasure4}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient5}:</p>
              <span>{mealDetails.strMeasure5}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient6}:</p>
              <span>{mealDetails.strMeasure6}</span>
            </div>
            <div className={styles.ingredientsDetails}>
              <p>{mealDetails.strIngredient7}:</p>
              <span>{mealDetails.strMeasure7}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
