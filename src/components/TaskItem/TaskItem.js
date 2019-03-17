import React from "react";
import { TaskItemStyled } from "./TaskItem.styled";

export const TaskItem = ({label}) => {
  return <TaskItemStyled>{label}</TaskItemStyled>;
};
