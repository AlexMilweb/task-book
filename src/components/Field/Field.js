import React from "react";
import { SearchIcon } from "./icons/SearchIcon";
import { FieldWrapper, FieldStyled, SearchIconStyled } from "./Field.styled";

export const Field = ({ placeholder, onChange, value, isSearch, ref }) => {
  return (
    <FieldWrapper>
      <FieldStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
      {isSearch && <SearchIconStyled as={SearchIcon} width={20} height={20} />}
    </FieldWrapper>
  );
};
