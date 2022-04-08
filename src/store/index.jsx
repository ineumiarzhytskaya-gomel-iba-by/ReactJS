import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";
import usersSlice from "./users-slice";
import { loggerMiddleware } from "./middlewares/LoggerMiddleware";

const store = configureStore({
  reducer: { card: cardSlice.reducer, users: usersSlice.reducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
