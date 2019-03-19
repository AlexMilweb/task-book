import React from "react";
import { AddTaskButtonStyled } from "./AddTaskButton.styled";

export const AddTaskButton = ({ onClick, isReturnMod }) => {
  return <AddTaskButtonStyled onClick={onClick} isReturnMod={isReturnMod} />;
};
