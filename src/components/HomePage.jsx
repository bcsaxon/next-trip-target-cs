import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useGetAllRoutesQuery } from "../services/apis/routesApi";
import { useDispatch } from "react-redux";
import { getRouteId } from "../services/slices/routesSlice";
import Loading from "./Loading";

const Homepage = () => {
  const { data: routes, isFetching, isLoading, error } = useGetAllRoutesQuery();
  const dispatch = useDispatch();

  if (isFetching || isLoading) return <Loading />;

  const handleClick = (routeId, e) => {
    dispatch(getRouteId(routeId));
    console.log(routeId);
    console.log("clicked");
  };

  return (
    <>
      <div className="App">
        {routes?.map((route) => (
          <Link
            to={`${route.route_id}`}
            // to={`/#`}
            onClick={(e) => handleClick(route.route_id, e)}
            key={route.route_id}
            className="routeLinks"
          >
            {route.route_label}
          </Link>
        ))}
        <div className="App">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Homepage;
