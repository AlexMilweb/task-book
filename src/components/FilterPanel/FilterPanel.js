import React from "react";
import { Field } from "../Field/Field";
import { FilterPanelStyled } from "./FilterPanel.styled";

export const FilterPanel = ({value, onChange}) => {
  return (
    <FilterPanelStyled>
      <Field placeholder="Search task" isSearch value={value} onChange={onChange} />
    </FilterPanelStyled>
  );
};
