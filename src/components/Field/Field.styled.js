import styled from "styled-components";

export const FieldWrapper = styled.div`
  position: relative;
`;

export const FieldStyled = styled.input`
  padding-left: 15px;
  padding-right: 45px;
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #2b7de9;
  background-color: rgba(43, 125, 233, 0.1);
  color: white;
  transition: background-color 0.3s;

  &:focus {
    background-color: rgba(43, 125, 233, 0.3);
  }

  &::placeholder {
    color: white;
  }
`;

export const SearchIconStyled = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #2b7de9;
`;
