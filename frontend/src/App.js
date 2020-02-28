import React from "react";
import { Landing } from "./components/Landing";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";

export const App = () => {
  return (
    <div>
      <Landing />
      <SignUp />
      <Login />
    </div>
  );
};
