import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInitialCardsAction } from "./store/card-slice";
import { usersActions } from "./store/users-slice";
import Header from "./components/UI/Header";
import Fallback from "./components/UI/Fallback";
import "./App.css";

const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Home = React.lazy(() => import("./pages/Home"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const CardPage = React.lazy(() => import("./pages/CardPage"));
const SettingsPage = React.lazy(() => import("./pages/SettingsPage"));

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
    <Suspense fallback={<Fallback />}>
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
    </Suspense>
  );
}

export default App;
