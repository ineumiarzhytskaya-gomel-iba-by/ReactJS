import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/UI/Header";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/card/:cardId" element={<CardPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
