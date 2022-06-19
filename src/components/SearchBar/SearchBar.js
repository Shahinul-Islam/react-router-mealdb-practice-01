import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  console.log(meals);
  const searchMeal = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="bg-orange-500 p-4">
      <input onChange={searchMeal} type="text" name="" id="" placeholder="Search your food" className="px-5 py-2 focus:outline-slate-200 rounded text-center" />
      <div>
        {meals.map((meal) => (
          <div className="grid grid-cols-6 gap-3 p-4">
            <h2>Name: {meal.strMeal}</h2>
            <h5>Category: {meal.strCategory}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
