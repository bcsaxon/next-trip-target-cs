import React from "react";
import { useParams } from "react-router-dom";
import { useGetRouteDetailsQuery } from "../services/apis/routesApi";
import Loading from "./Loading";
import RouteDetailsCard from "./RouteDetailsCard";

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
      <div className="routeDetailsContainer">
        <h1>Route Stops</h1>
        <header className="routeDetailsCardHeader">
          <h2>Stop Code</h2>
          <h2>Stop Description</h2>
        </header>
        {stops?.map((stop) => (
          <RouteDetailsCard key={stop.place_code} stop={stop} />
        ))}
      </div>
    </>
  );
};

// {/* <div key={stop.place_code} className="directionLinks">
//   <h3>{stop.place_code}</h3>
//   <p>{stop.description}</p>
// </div> */}
export default RouteDetails;
