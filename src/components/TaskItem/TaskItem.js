import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { TrashIcon } from "./icons/TrashIcon";
import {
  TaskItemStyled,
  CheckboxStyled,
  Label,
  Button,
  Buttons,
  TrashIconStyled
} from "./TaskItem.styled";

export const TaskItem = ({
  id,
  label,
  isDone,
  onToggleTaskDone,
  onDeleteTask
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <TaskItemStyled htmlFor={id}>
      <CheckboxStyled
        id={id}
        as={Checkbox}
        isChecked={isDone}
        onChange={onToggleTaskDone}
      />
      <Label isDone={isDone}>{label}</Label>
      <Buttons>
        <Button onClick={handleDeleteTask}>
          <TrashIconStyled as={TrashIcon} />
        </Button>
      </Buttons>
    </TaskItemStyled>
  );
};
