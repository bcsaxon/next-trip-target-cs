import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints

const baseUrl = "https://svc.metrotransit.org/nextripv2";

// const nextTripHeaders = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

// const createRequest = (url) => ({ url, headers: nextTripHeaders });

export const routesApi = createApi({
  reducerPath: "routesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllRoutes: builder.query({
      query: () => "/routes",
      // query: () => createRequest(`/routes`),
    }),
    getRouteDirection: builder.query({
      // query: () => "/routes",
      // query: address => `${address}`,
      query: (route_id) => `/directions/${route_id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRoutesQuery, useGetRouteDirectionQuery } = routesApi;

// const res = await fetch('http://localhost:3000/concerts', {
//   method: 'POST',
//   body: JSON.stringify(concert),
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   }
// });
// const data = await res.json();
