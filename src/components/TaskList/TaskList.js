import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskListStyled, Task } from "./TaskList.styled";

export const TaskList = () => {
  return (
    <TaskListStyled>
      <Task>
        <TaskItem />
      </Task>
      <Task>
        <TaskItem />
      </Task>
      <Task>
        <TaskItem />
      </Task>
    </TaskListStyled>
  );
};
