import styled from "styled-components";

export const MainLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const AppContainer = styled.div`
  position: relative;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #333;
  max-width: 375px;
  width: 100%;
  min-height: 667px;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: none;
    height: 100vh;
    min-height: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  transition: transform 0.3s;
`;

export const Screen = styled.div`
  width: 100%;
  flex-shrink: 0;
  padding: 15px;
`;

export const Form = styled.form``;

export const ButtonStyled = styled.button`
  margin-top: 10px;
`;

export const InfoPanel = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  text-transform: uppercase;
`;
