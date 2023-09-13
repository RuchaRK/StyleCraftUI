import * as React from "react";
import { Header } from "../Components/Header";

import styled from "@emotion/styled";

const MainContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
`;

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
  );
};
