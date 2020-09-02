import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

const Home = () => {
  return home;
};

const Category = () => {
  return category;
};

const Products = () => {
  return products;
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      {/*Route components rendered if following path */}
      <Route path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
