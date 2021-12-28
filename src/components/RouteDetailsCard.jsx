import React from "react";

const RouteDetailsCard = ({ stop: { place_code, description } }) => {
  return (
    <>
      <div className="routeDetailsCard">
        <h3>{place_code}</h3>
        <h3>{description}</h3>
      </div>
    </>
  );
};

export default RouteDetailsCard;
