import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeMeal = ({ meal }) => {
  const { strMeal, strCategory, strMealThumb, strArea, strInstructions, idMeal } = meal;
  const navigate = useNavigate();
  const showMealDetails = () => {
    navigate("/food/" + idMeal);
  };
  const path = "/food/" + idMeal;
  return (
    <div className="bg-slate-400 p-2 rounded-md">
      <div>
        <img src={strMealThumb} alt="" className="h-36 w-36 mx-auto p-2" />
      </div>
      <div>
        <h2>{strMeal}</h2>
        <Link to={path} className="bg-yellow-100 mt-2 px-1">
          Link Details: {idMeal}
        </Link>
        <br></br>
        <button className="bg-yellow-100 mt-2 px-1" onClick={showMealDetails}>
          BTN Details {idMeal}
        </button>
      </div>
    </div>
  );
};

export default HomeMeal;
