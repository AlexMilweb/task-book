import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskListStyled, Task } from "./TaskList.styled";

export const TaskList = ({ tasks, onToggleTaskDone, onDeleteTask }) => {
  const taskList = tasks.map(task => {
    const { id, ...taskProps } = task;

    return (
      <Task key={id}>
        <TaskItem
          id={id}
          onToggleTaskDone={onToggleTaskDone}
          onDeleteTask={onDeleteTask}
          {...taskProps}
        />
      </Task>
    );
  });

  return <TaskListStyled>{taskList}</TaskListStyled>;
};
