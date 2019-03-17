import React from "react";
import { HeaderStyled, Title, VersionApp } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Title>
        Task Book <VersionApp>v0.1</VersionApp>
      </Title>
    </HeaderStyled>
  );
};
