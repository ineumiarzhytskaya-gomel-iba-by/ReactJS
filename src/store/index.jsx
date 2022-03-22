import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card-slice";

const store = configureStore({
  reducer: { card: cardSlice.reducer },
});

export default store;
