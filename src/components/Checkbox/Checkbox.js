import React from "react";
import { CheckboxWrapper, CheckboxStyled } from "./Checkbox.styled";

export const Checkbox = ({ id, isChecked, className, onChange }) => {
  const handleChange = () => {
    onChange(id);
  };

  return (
    <CheckboxWrapper className={className} isChecked={isChecked}>
      <CheckboxStyled
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
    </CheckboxWrapper>
  );
};
