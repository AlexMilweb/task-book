import React from "react";
import { CheckboxWrapper, CheckboxStyled } from "./Checkbox.styled";

export const Checkbox = ({ isChecked, className }) => {
  return (
    <CheckboxWrapper className={className} isChecked={isChecked}>
      <CheckboxStyled type="checkbox" checked={isChecked} />
    </CheckboxWrapper>
  );
};
