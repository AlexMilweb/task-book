import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { FieldWrapper, FieldStyled, SearchIconStyled } from "./Field.styled";

export const Field = ({ placeholder }) => {
  return (
    <FieldWrapper>
      <FieldStyled placeholder={placeholder} />
      <SearchIconStyled as={SearchIcon} width={20} height={20} />
    </FieldWrapper>
  );
};
