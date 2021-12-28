import React from "react";
import { useGetRouteDirectionQuery } from "../services/apis/routesApi";
import { Outlet, useParams, Link } from "react-router-dom";
import { getDirectionId } from "../services/slices/routesSlice";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

const RouteDirection = () => {
  const { routeId } = useParams();
  const dispatch = useDispatch();

  const { data: directions, isFetching } = useGetRouteDirectionQuery(routeId);

  if (isFetching) return <Loading />;

  const handleClick = (directionId, e) => {
    dispatch(getDirectionId(directionId));
  };

  return (
    <>
      <div className="routeDirectionContainer">
        <h1>Route Direction</h1>
        <div className="directionButtonsContainer">
          {directions?.map((direction) => (
            <Link
              to={`${direction.direction_id}`}
              onClick={() => handleClick(direction.direction_id)}
              key={direction.direction_id}
            >
              <button className="directionButtons">
                {direction.direction_name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default RouteDirection;
