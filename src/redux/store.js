import { configureStore } from "@reduxjs/toolkit";
import volunteersReducer from "./volunteersSlice";
import eventsReducer from "./eventSlice.js";

const rootReducer = {
  volunteers: volunteersReducer,
  events: eventsReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
