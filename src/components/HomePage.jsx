import React from "react";
import { useGetAllRoutesQuery } from "../services/apis/routesApi";
import { useGetRouteDirectionQuery } from "../services/apis/routesApi";

const Homepage = () => {
  const { data: routes, isFetching, error } = useGetAllRoutesQuery();
  // const { data: direction } = useGetRouteDirectionQuery(901);

  // const globalStats = data?.data?.stats;

  // console.log(routes);
  // console.log(direction);

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

  const handleClick = () => {
    // e.preventDefault();
    // console.log(route.route_id);
    console.log("clicked");
  };

  return (
    <>
      <div className="App">
        {routes.map((route) => (
          <a
            className="routeLinks"
            href="/#"
            onClick={handleClick}
            key={route.route_id}
          >
            {route.route_label}
          </a>
        ))}
        <div className="App">{/* <ul>{routeList}</ul> */}</div>
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

export default Homepage;
