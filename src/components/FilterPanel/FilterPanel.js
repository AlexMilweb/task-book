import React from "react";
import { Field } from "../Field/Field";
import { FilterPanelStyled } from "./FilterPanel.styled";

export const FilterPanel = () => {
  return (
    <FilterPanelStyled>
      <Field placeholder="Search task" isSearch />
    </FilterPanelStyled>
  );
};
