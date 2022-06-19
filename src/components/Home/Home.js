// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import HomeMeal from "../HomeMeal/HomeMeal";

const Home = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=s";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  // console.log(meals);
  return (
    <div className="grid grid-cols-3 gap-5 pt-4 mx-4">
      {meals.map((meal) => (
        <HomeMeal key={meal.idMeal} meal={meal}></HomeMeal>
      ))}
    </div>
  );
};

export default Home;
