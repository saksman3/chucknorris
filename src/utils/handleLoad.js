import React from "react";
export default props => {
  if (props.fetchFailed) {
    return <h3>Error occured</h3>;
  }
  if (props.fetching) {
    console.log("fetchinf");
    return <h1>fetching</h1>;
  }
};
