import styled, { css } from "styled-components";

export const CheckboxWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px #2b7de9;
  cursor: pointer;
  flex-shrink: 0;

  ${props =>
    props.isChecked &&
    css`
      background-color: #2b7de9;

      &::before {
        position: absolute;
        top: 6px;
        left: 4px;
        content: "";
        width: 10px;
        height: 4px;
        border-left: 2px solid white;
        border-bottom: 2px solid white;
        transform: rotate(-45deg);
      }
    `};
`;

export const CheckboxStyled = styled.input`
  visibility: hidden;
  opacity: 0;
`;
