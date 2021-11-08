import React from "react";
import "./recipe.modules.css"

const Recipe = (props) => {
  const title = props.title;
  const calories = props.calories;
  const image = props.image;
  const ingredients = props.ingredients;
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories : {Math.round(calories*10)}</p>
      <img className="image" src={image} alt=""></img>
    </div>
  );
};

export default Recipe;
