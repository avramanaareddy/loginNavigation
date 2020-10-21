import React from "react";
import { Route, NavLink, Switch, useHistory } from "react-router-dom";

import Airports from "./Airports";
import Cities from "./Cities";
import CityDetail from "./CityDetail";
import AirportDetail from "./AirportDetail";
import Home from "./Home";
function NavBar() {
  let history = useHistory();
  console.log("NavBar component");
  if(!window.localStorage.getItem('token'))
    history.push('/login');
   return <></>;
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/airports">Airports</NavLink>
          </li>
          <li>
            <NavLink to="/cities">Cities</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
       <Route path="/" component={Home}/> 
        <Route path="/airports/:name">
          <AirportDetail />
        </Route>
        <Route path="/airports" component={Airports} />
        <Route exact path="/cities" component={Cities} />
        <Route path="/cities/:cityName">
          <CityDetail />
        </Route>
     </Switch>   
    </>
  );
}
export default NavBar;
