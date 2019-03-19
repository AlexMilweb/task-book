import styled, { css } from "styled-components";

export const TaskItemStyled = styled.label`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2b7de9;
`;

export const CheckboxStyled = styled.div`
  margin-right: 15px;
`;

export const Label = styled.span`
  cursor: pointer;
  user-select: none;

  ${props =>
    props.isDone &&
    css`
      color: #4dc145;
      text-decoration: line-through;
    `};
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Button = styled.button`
  font-size: 0;
`;

export const TrashIconStyled = styled.svg`
  color: rgb(168, 72, 72);
  width: 20px;
  height: 20px;
`;
