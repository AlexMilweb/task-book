import React from "react";
import { FilterStyled, Field } from "./Filter.styled";

export const Filter = () => {
  return (
    <FilterStyled>
      <Field placeholder="Enter task name" />
    </FilterStyled>
  );
};
