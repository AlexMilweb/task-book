import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TaskItemStyled, CheckboxStyled, Label } from "./TaskItem.styled";

export const TaskItem = ({ label, isChecked }) => {
  return (
    <TaskItemStyled>
      <CheckboxStyled as={Checkbox} isChecked={isChecked} />
      <Label isChecked={isChecked}>{label}</Label>
    </TaskItemStyled>
  );
};
