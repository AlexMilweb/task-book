import React from "react";
import { MainLayout } from "../MainLayout/MainLayout";
import { GlobalStyle } from "../../GlobalStyles.styled";
import { AppStyled } from "./App.styled";

export const App = () => {
  return (
    <AppStyled>
      <GlobalStyle />
      <MainLayout />
    </AppStyled>
  );
};
