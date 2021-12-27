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
      query: (routeId) => `/directions/${routeId}`,
    }),
    getRouteDetails: builder.query({
      // query: () => "/routes",
      // query: address => `${address}`,
      // console.log(routeId, directionId),
      query: (direction) => `/stops/${direction}`,
    }),
  }),
});

export const {
  useGetAllRoutesQuery,
  useGetRouteDirectionQuery,
  useGetRouteDetailsQuery,
} = routesApi;
