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

export const MainLayout = React.memo(() => {
  if (!localStorage.getItem("indexId")) {
    localStorage.setItem("indexId", 1);
  }

  const getIndexById = (tasks, id) => tasks.findIndex(el => el.id === id);
  const defaultTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = React.useState(defaultTasks);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [taskName, setTaskName] = React.useState("");
  const [screen, setScreen] = React.useState("home");
  const [valueSearch, setValueSearch] = React.useState("");

  const createTaskItem = label => {
    return {
      id: `taskId_${localStorage.getItem("indexId")}`,
      label,
      isDone: false
    };
  };

  const saveTasksToLocalStorage = tasks =>
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

      saveTasksToLocalStorage(newArray);
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
      saveTasksToLocalStorage(newArray);

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

    localStorage.setItem("indexId", +localStorage.getItem("indexId") + 1);

    setTasks(oldTasks => {
      const newArray = [createTaskItem(taskName), ...oldTasks];
      saveTasksToLocalStorage(newArray);

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

  const handleValueSearch = e => {
    const value = e.target.value;
    setValueSearch(value);

    const filteredTasks = tasks.filter(task => {
      return task.label.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setFilteredTasks(filteredTasks);
  };

  return (
    <MainLayoutStyled>
      <AppContainer>
        <Header />
        <Content style={getTransformContent()}>
          <Screen>
            <FilterPanel value={valueSearch} onChange={handleValueSearch} />
            <TaskList
              tasks={valueSearch.length ? filteredTasks : tasks}
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
