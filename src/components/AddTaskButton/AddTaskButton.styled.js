import styled from "styled-components";

export const AddTaskButtonStyled = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: #2b7de9;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 20px;
    height: 2px;
    background-color: white;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;
