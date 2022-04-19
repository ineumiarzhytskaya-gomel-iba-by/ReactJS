import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInitialCardsAction } from "./store/card-slice";
import { usersActions } from "./store/users-slice";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/UI/Header";
import CardPage from "./pages/CardPage";
import SettingsPage from "./pages/SettingsPage";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.users.isAdmin);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  if (isInitial) {
    dispatch(getInitialCardsAction());

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      dispatch(
        usersActions.login({
          userEmail: userInfo.email,
          token: userInfo.token,
        })
      );
    }

    isInitial = false;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/home" : "/sign-in"} />}
        />
        {isLoggedIn && <Route path="/home" element={<Home />} />}
        {!isLoggedIn && <Route path="/sign-in" element={<SignIn />} />}
        {isLoggedIn && <Route path="/card/:cardId" element={<CardPage />} />}
        {isAdmin && <Route path="/settings" element={<SettingsPage />} />}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
