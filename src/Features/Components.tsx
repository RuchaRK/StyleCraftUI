import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { PageWrapper } from "../Components/PageWrapper";
import { uiComponentRouteAndComponentMap } from "./Documentation/Documentation.utils";
import styled from "@emotion/styled";
import { NavLink } from "../UIComponents/NavLink/NavLink";
import { Text } from "../UIComponents/Text/Text";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 32px;
  gap: 32px;
  flex: 1;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideNavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 200px;
  border-right: 1px solid #e4e4e4;
  align-items: flex-start;
`;

export const Components = () => {
  return (
    <PageWrapper>
      <MainContainer>
        <SideNavBar>
          {Object.entries(uiComponentRouteAndComponentMap).map(
            ([key, { path }]) => {
              return (
                <NavLink to={path}>
                  <Text variant="h5" style={{ textTransform: "capitalize" }}>
                    {key}
                  </Text>
                </NavLink>
              );
            }
          )}
        </SideNavBar>
        <ComponentContainer>
          <Routes>
            {Object.entries(uiComponentRouteAndComponentMap).map(
              ([key, { path, component: Component }]) => {
                return <Route path={path} element={<Component />} />;
              }
            )}
          </Routes>
        </ComponentContainer>
      </MainContainer>
    </PageWrapper>
  );
};
