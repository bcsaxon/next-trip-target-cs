import React from "react";
import { useGetRouteDirectionQuery } from "../services/apis/routesApi";
import { Outlet, useParams, Link } from "react-router-dom";
import { getDirectionId } from "../services/slices/routesSlice";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

const RouteDirection = () => {
  const { routeId } = useParams();
  const dispatch = useDispatch();

  const {
    data: directions,
    isFetching,
    isLoading,
    error,
  } = useGetRouteDirectionQuery(routeId);

  console.log(routeId);

  if (isFetching || isLoading) return <Loading />;

  console.log(directions);
  console.log(directions[0]?.direction_name);

  const handleClick = (directionId, e) => {
    dispatch(getDirectionId(directionId));
    console.log(directionId);
    console.log("clicked direction");
  };

  return (
    <>
      <div className="App">
        <h1>Route Direction</h1>
        {directions?.map((direction) => (
          <Link
            to={`${direction.direction_id}`}
            onClick={(e) => handleClick(direction.direction_id, e)}
            key={direction.direction_id}
            className="directionLinks"
          >
            {direction.direction_name}
          </Link>
        ))}
        <div className="App">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RouteDirection;
