import styled, { css } from "styled-components";

export const TaskItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2b7de9;
`;

export const CheckboxStyled = styled.div`
  margin-right: 15px;
`;

export const Label = styled.div`
  ${props =>
    props.isChecked &&
    css`
      color: #4dc145;
      text-decoration: line-through;
    `};
`;
