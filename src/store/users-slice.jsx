import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    token: "",
    isLoggedIn: false,
    isAdmin: false,
    email: "",
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.email = action.payload.userEmail;
      if (action.payload.userEmail === "testadmin@gmail.com") {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }

      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    logout(state) {
      state.isAdmin = false;
      state.isLoggedIn = false;
      state.token = false;
      state.email = "";

      localStorage.removeItem("userInfo");
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
