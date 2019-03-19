import React from "react";
import { Header } from "../Header/Header";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { TaskList } from "../TaskList/TaskList";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import { MainLayoutStyled, AppContainer } from "./MainLayout.styled.js";

export const MainLayout = () => {
  let indexId = 1;

  const createTaskItem = label => {
    return {
      id: indexId++,
      label,
      isDone: false
    };
  };

  const [tasks, setTasks] = React.useState([
    createTaskItem("Изучить уроки по React.js"),
    createTaskItem("Сделать уборку"),
    createTaskItem("Погулять на улице")
  ]);

  const handleToggleTaskDone = id => {
    setTasks(oldTasks => {
      const index = oldTasks.findIndex(el => el.id === id);
      const updateTask = {
        ...oldTasks[index],
        isDone: !oldTasks[index].isDone
      };

      return [
        ...oldTasks.slice(0, index),
        updateTask,
        ...oldTasks.slice(index + 1)
      ];
    });
  };

  return (
    <MainLayoutStyled>
      <AppContainer>
        <Header />
        <FilterPanel />
        <TaskList tasks={tasks} onToggleTaskDone={handleToggleTaskDone} />
        <AddTaskButton />
      </AppContainer>
    </MainLayoutStyled>
  );
};
