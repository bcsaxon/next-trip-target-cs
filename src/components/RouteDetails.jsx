import React from "react";
import { useParams } from "react-router-dom";
import { useGetRouteDetailsQuery } from "../services/apis/routesApi";
import Loading from "./Loading";
import RouteDetailsCard from "./RouteDetailsCard";

const RouteDetails = () => {
  const { routeId, directionId } = useParams();
  const { data: stops, isFetching } = useGetRouteDetailsQuery(
    `${routeId}/${directionId}`
  );

  if (isFetching) return <Loading />;

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

export default RouteDetails;
