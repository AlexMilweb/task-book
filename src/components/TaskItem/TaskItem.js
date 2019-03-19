import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TaskItemStyled, CheckboxStyled, Label } from "./TaskItem.styled";

export const TaskItem = ({ id, label, isDone, onToggleTaskDone }) => {
  return (
    <TaskItemStyled htmlFor={id}>
      <CheckboxStyled
        id={id}
        as={Checkbox}
        isChecked={isDone}
        onChange={onToggleTaskDone}
      />
      <Label isDone={isDone}>{label}</Label>
    </TaskItemStyled>
  );
};
