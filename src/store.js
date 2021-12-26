import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { routesApi } from "../src/services/apis/routesApi";

export const store = configureStore({
  reducer: {
    [routesApi.reducerPath]: routesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware),
});

setupListeners(store.dispatch);
