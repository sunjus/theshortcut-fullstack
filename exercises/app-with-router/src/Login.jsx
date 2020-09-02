import React, { useState } from "React";
import { Redirect } from "react-router-dom";

const fakeAuth = {
  isAuthenticated,
};

function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);
  const [redirectToReferrer, setRedirecToReferrer] = useState(false);
  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirecToReferrer(true);
    });
  };
  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <div>
      <p> You must login to view page at {from.pathname}</p>
      <button></button>
    </div>
  );
}

export default Login;
