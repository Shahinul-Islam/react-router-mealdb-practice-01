import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMeal = () => {
  const { mealId } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals[0]));
  }, [meals]);
  console.log(meals);

  return (
    <div className="max-w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mt-4">
      <a href="#">
        <img className="rounded-t-lg mx-auto" src={meals.strMealThumb} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meals.strMeal}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{meals.strInstructions}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {meals.strCategory}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Origin: {meals.strArea}</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Order Now
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SingleMeal;
