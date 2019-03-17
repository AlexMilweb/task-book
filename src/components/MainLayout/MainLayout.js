import React from "react";
import { Header } from "../Header/Header";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { TaskList } from "../TaskList/TaskList";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import { MainLayoutStyled, AppContainer } from "./MainLayout.styled.js";

export const MainLayout = () => {
  const tasks = [
    {
      id: 1,
      label: "Изучить уроки по React.js",
      isChecked: false
    },
    {
      id: 2,
      label: "Сделать уборку",
      isChecked: false
    },
    {
      id: 3,
      label: "Погулять на улице",
      isChecked: true
    }
  ];

  return (
    <MainLayoutStyled>
      <AppContainer>
        <Header />
        <FilterPanel />
        <TaskList tasks={tasks} />
        <AddTaskButton />
      </AppContainer>
    </MainLayoutStyled>
  );
};
