import React from "react";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <ButtonStyled onClick={onClick} type={type} className={className}>
      {children}
    </ButtonStyled>
  );
};
