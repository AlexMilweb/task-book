import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { FieldWrapper, FieldStyled, SearchIconStyled } from "./Field.styled";

export const Field = ({ placeholder, onChange, value, isSearch }) => {
  return (
    <FieldWrapper>
      <FieldStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isSearch && <SearchIconStyled as={SearchIcon} width={20} height={20} />}
    </FieldWrapper>
  );
};
