import Recipe from "./Recipe";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const API_ID = "295a30f8";
  const API_KEY = "9819cfa83ace10c5fc6051e2d649981e";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [notFound, setNotFound] = useState(false);

  const requestURL = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

  const getRecipies = async () => {
      const response = await fetch(requestURL);
      let data = await response.json();
      setRecipes(data.hits);
      data.hits.length>0 ? setNotFound(false) : setNotFound(true);
    };

  useEffect(() => {
    getRecipies();
    console.log(query);
    console.log(recipes);
  }, [query]);

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={submitHandler}>
        <label>Enter your search</label>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {notFound ? (
        <div className="NotFound">
          <h1>Error 404 !! Resource not found</h1>
        </div>
      ) : (
        recipes.map((recipe) => (
          <Recipe
            key={null}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))
      )}
    </div>
  );
}

export default App;
