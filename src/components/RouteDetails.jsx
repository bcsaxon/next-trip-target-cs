import React from "react";
import { useParams } from "react-router-dom";
import { useGetRouteDetailsQuery } from "../services/apis/routesApi";
import Loading from "./Loading";

const RouteDetails = () => {
  const { routeId, directionId } = useParams();
  const {
    data: stops,
    isFetching,
    isLoading,
    error,
  } = useGetRouteDetailsQuery(`${routeId}/${directionId}`);

  if (isFetching || isLoading) return <Loading />;
  console.log(routeId);
  console.log(directionId);

  console.log(stops);

  return (
    <>
      <div className="App">
        {console.log(directionId)}
        <h1>Route Stops</h1>
        {stops?.map((stop) => (
          <div key={stop.place_code} className="directionLinks">
            <h3>{stop.place_code}</h3>
            <p>{stop.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RouteDetails;
