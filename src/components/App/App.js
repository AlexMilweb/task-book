import React from "react";
import { Header } from "../Header/Header";
import { Filter } from "../Filter/Filter";
import { TaskList } from "../TaskList/TaskList";
import { AppStyled } from "./App.styled";

export const App = () => {
  return (
    <AppStyled>
      <Header />
      <Filter />
      <TaskList />
    </AppStyled>
  );
};
