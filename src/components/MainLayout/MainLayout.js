import React from "react";
import { Header } from "../Header/Header";
import { FilterPanel } from "../FilterPanel/FilterPanel";
import { Field } from "../Field/Field";
import { Button } from "../Button/Button";
import { TaskList } from "../TaskList/TaskList";
import { AddTaskButton } from "../AddTaskButton/AddTaskButton";
import {
  MainLayoutStyled,
  AppContainer,
  Content,
  Screen,
  Form,
  ButtonStyled
} from "./MainLayout.styled.js";

let indexId = 1;

export const MainLayout = React.memo(() => {
  const createTaskItem = label => {
    return {
      id: indexId,
      label,
      isDone: false
    };
  };

  const getIndexById = (tasks, id) => tasks.findIndex(el => el.id === id);
  const defaultTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = React.useState(defaultTasks);
  const [taskName, setTaskName] = React.useState("");
  const [screen, setScreen] = React.useState("home");

  const saveToLocalStorage = tasks =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

  const handleToggleTaskDone = id => {
    setTasks(oldTasks => {
      const index = getIndexById(oldTasks, id);

      const updateTask = {
        ...oldTasks[index],
        isDone: !oldTasks[index].isDone
      };

      const newArray = [
        ...oldTasks.slice(0, index),
        updateTask,
        ...oldTasks.slice(index + 1)
      ];

      saveToLocalStorage(newArray);
      return newArray;
    });
  };

  const handleDeleteTask = id => {
    setTasks(oldTasks => {
      const index = getIndexById(oldTasks, id);
      const newArray = [
        ...oldTasks.slice(0, index),
        ...oldTasks.slice(index + 1)
      ];
      saveToLocalStorage(newArray);

      return newArray;
    });
  };

  const handleChangeTaskName = e => {
    setTaskName(e.target.value);
  };

  const handleAddTask = e => {
    e.preventDefault();

    if (!taskName.length) {
      return;
    }

    indexId++;

    setTasks(oldTasks => {
      const newArray = [createTaskItem(taskName), ...oldTasks];
      saveToLocalStorage(newArray);

      return newArray;
    });
    setTaskName("");
    setScreen("home");
  };

  const getTransformContent = () => {
    switch (screen) {
      case "home":
        return { transform: "translateX(0)" };
      case "addTask":
        return { transform: "translateX(-100%)" };
      default:
        return { transform: "translateX(0)" };
    }
  };

  const changeScreen = screen => () => {
    setScreen(screen);
  };

  return (
    <MainLayoutStyled>
      <AppContainer>
        <Header />
        <Content style={getTransformContent()}>
          <Screen>
            <FilterPanel />
            <TaskList
              tasks={tasks}
              onToggleTaskDone={handleToggleTaskDone}
              onDeleteTask={handleDeleteTask}
            />
          </Screen>
          <Screen>
            <Form onSubmit={handleAddTask}>
              <Field
                placeholder="Enter task name"
                value={taskName}
                onChange={handleChangeTaskName}
              />
              <ButtonStyled as={Button} type="submit" onClick={handleAddTask}>
                Add new task
              </ButtonStyled>
            </Form>
          </Screen>
        </Content>
        <AddTaskButton
          onClick={changeScreen(screen === "home" ? "addTask" : "home")}
          isReturnMod={screen === "addTask"}
        />
      </AppContainer>
    </MainLayoutStyled>
  );
});
