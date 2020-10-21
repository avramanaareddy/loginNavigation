import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import CityDetail from "./CityDetail";

const Cities = () => {
  console.log("Citites component");
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to="/cities/chennai"> Chennai </NavLink>
          </li>
          <li>
            <NavLink to="/cities/bengaluru"> Bengaluru </NavLink>
          </li>
          <li>
            <NavLink to="/cities/hyderabad">Hyderabad</NavLink>
          </li>
        </ul>
      </div>
      <div></div>
    </>
  );
};
/*
<Switch>
       <Route path='/cities/:cityName'>
              <CityDetail/>
          </Route>
   </Switch> 
*/
export default Cities;
