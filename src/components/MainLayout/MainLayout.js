import React from "react";
import { Header } from "../Header/Header";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { TaskList } from "../TaskList/TaskList";
import { MainLayoutStyled, AppContainer } from "./MainLayout.styled.js";

export const MainLayout = () => {
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
    <MainLayoutStyled>
      <AppContainer>
        <Header />
        <FilterPanel />
        <TaskList tasks={tasks} />
      </AppContainer>
    </MainLayoutStyled>
  );
};
