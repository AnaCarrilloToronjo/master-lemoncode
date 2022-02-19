import React from "react";
import { Navbar } from "./components/navbar";
import { Characters } from "./components/rick-morty/characters";
import { AppRouter } from "./components/routers/appRouter";

export const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
