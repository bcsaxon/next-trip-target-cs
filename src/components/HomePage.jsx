import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useGetAllRoutesQuery } from "../services/apis/routesApi";
import { useDispatch } from "react-redux";
import { getRouteId } from "../services/slices/routesSlice";
import Loading from "./Loading";

const Homepage = () => {
  const { data: routes, isFetching } = useGetAllRoutesQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isFetching) return <Loading />;

  const handleOnChange = (e) => {
    dispatch(getRouteId(e.target.value));
    navigate(e.target.value);
  };

  return (
    <>
      <div className="app">
        <nav className="navContainer">
          <select
            data-testid="dropdown"
            className="routeSelect"
            onChange={handleOnChange}
          >
            <option value="Select a Stop"> -- Select a Stop -- </option>
            {routes?.map((route) => (
              <option key={route.route_id} value={route.route_id}>
                {route.route_label}
              </option>
            ))}
          </select>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Homepage;
