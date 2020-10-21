import React from "react";
import { withRouter } from "react-router-dom";
const CityDetail = (props) => {
  console.log("Props Of CityDetail", props);
  return (
    <div>
      <h1>City Details</h1>
      <h2>PathName: {props.location.pathname}</h2>
      <h2>{props.match.params.cityName} is Big City</h2>
      <button type="button" onClick={() => props.history.goBack()}>
        GoBack
      </button>
    </div>
  );
};
export default withRouter(CityDetail);
