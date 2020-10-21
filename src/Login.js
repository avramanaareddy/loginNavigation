import React from "react";
import { withRouter } from "react-router-dom";
const Login = (props) => {
  console.log("Props Of CityDetail", props);
  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => {
          window.localStorage.setItem("token", "userId");
          props.history.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
};
export default Login;
