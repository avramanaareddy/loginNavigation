import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import Login from "./Login.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={NavBar} />
        </Switch>
      </div>
    </>
  );
}

export default App;
