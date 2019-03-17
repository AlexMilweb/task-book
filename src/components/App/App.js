import React from "react";
import { Header } from "../Header/Header";
import { Filter } from "../Filter/Filter";
import { TaskList } from "../TaskList/TaskList";
import { AppStyled } from "./App.styled";

export const App = () => {
  const tasks = [
    {
      id: 1,
      label: "Drink coffee"
    },
    {
      id: 2,
      label: "Visite to shop"
    },
    {
      id: 3,
      label: "Learn React"
    }
  ];

  return (
    <AppStyled>
      <Header />
      <Filter />
      <TaskList tasks={tasks} />
    </AppStyled>
  );
};
