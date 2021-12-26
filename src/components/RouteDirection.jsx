import React from "react";
import { useGetRouteDirectionQuery } from "../services/apis/routesApi";

const RouteDirection = ({ props }) => {
  // const { data: routes, isFetching, error } = useGetAllRoutesQuery();
  const {
    data: directions,
    isFetching,
    error,
  } = useGetRouteDirectionQuery(901);

  // const globalStats = data?.data?.stats;

  // console.log(props.route);
  console.log(directions);

  // const route = routes.map((route) => console.log({ route }));

  // const routeList = routes.map(
  //   (route) => console.log(route)
  //   // <li key={route.id}> {route}</li>;
  // );
  // const listRoutes = routesArray.map(({ route_label, route_id }) =>
  //   console.log({ route_label, route_id })
  // );

  // console.log(listRoutes);
  // console.log(routes.route_label);
  if (isFetching) return <div className="App">"Loading....."</div>;

  const handleClick = ({ route_id }, e) => {
    e.preventDefault();
    console.log(route_id);
    console.log("clicked");
  };

  return (
    <>
      <div className="App">
        {/* {routes.map((route) => (
          <a href="/#" onClick={handleClick} key={route.route_id}>
            {route.route_label}
          </a>
        ))} */}
        <h1>Route Direction</h1>
        <button></button>
      </div>
    </>
  );
};

// function PostsList() {
//   const { data, error } = useGetPostsQuery()

//   return (
//     <div>
//       {error.status} {JSON.stringify(error.data)}
//     </div>
//   )
// }

export default RouteDirection;
