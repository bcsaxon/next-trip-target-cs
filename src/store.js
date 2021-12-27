import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { routesApi } from "../src/services/apis/routesApi";
import routesReducer from "../src/services/slices/routesSlice";

export const store = configureStore({
  reducer: {
    [routesApi.reducerPath]: routesApi.reducer,
    routes: routesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware),
});

setupListeners(store.dispatch);
