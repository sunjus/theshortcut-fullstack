import React from "react";
import restaurants from "./restaurants";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My Restaurant List</h1>
      <div className="container">
        {restaurants.businesses.map((restaurants, key) => {
          return (
            <div key={restaurants.id} className="restaurants">
              <img src={restaurants.image_url} />
              <p className="restaurant">{restaurants.name}</p>
              <p>
                {restaurants.rating} stars, {restaurants.review_count} Reviews
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
