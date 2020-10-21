import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

const Airport = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h2> {JSON.stringify(match)} </h2>
      <div>
        <ul>
          <li>
            <NavLink to={`${match.path}/rajiv`}> RajivGandhi Airport </NavLink>
          </li>
          <li> Kempegowda Airport</li>
          <li> Delhi Airport</li>
        </ul>
      </div>
    </div>
  );
};
export default Airport;
