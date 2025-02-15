import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (action.type.startsWith("auth/")) {
      let currentAuth = getState().auth;
      localStorage.setItem("authState", JSON.stringify(currentAuth));
    }
    return result;
  };
};
const reHydrateStore = () => {
  if (localStorage.getItem("authState") !== null) {
    return { auth: JSON.parse(localStorage.getItem("authState")) }; // re-hydrate the store
  }
};
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(localStorageMiddleware);
  },
});
export default store;
