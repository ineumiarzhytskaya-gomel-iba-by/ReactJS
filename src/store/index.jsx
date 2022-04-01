import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";
import { loggerMiddleware } from "./middlewares/LoggerMiddleware";

const store = configureStore({
  reducer: { card: cardSlice.reducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
