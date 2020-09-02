import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Category from "./Category";
import Product from "./Product";
import { Link, Route, Switch } from "react-route-dom";
import Products from "./Products";
import Login, {fake} from './Login';

import { Link, Route, Switch } from "react-router-dom";

const Home = () => {
  <div>
    <h2>home</h2>
  </div>;
};

const Category = () => {
  <div>
    <h2>category</h2>
  </div>;
};

const Products = () => {
  <div>
    <h2>products</h2>
  </div>;
};

const Admin = ({match})=>{
  return (
    <div>
      <h2>Welcome Admin</h2>
    </div>
  )
}

const PrivateRoute = ({component:Component, ...rest})=>{
  return (
    <Route 
    {...rest}
    render ={props =>
    fakeAuth.isAuthenticated === true ? (
      <Component {...props} />
    ) : (
      <Redirect to ={{pathname:'/login',state:{from:props.location}}}
      />
    )}
    />
  )
}

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
          <li>
            <Link to="/edmin">Edmin</Link>
          </li>
        </ul>
      </nav>

      {/*Route components rendered if following path */}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='/admin' component={}
      </Switch>
      
    </div>
  );
}

export default App;
