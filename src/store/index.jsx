import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";
import { loggerMiddleware } from "./card-slice";

const store = configureStore({
  reducer: { card: cardSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
