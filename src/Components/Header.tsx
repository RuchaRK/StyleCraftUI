import * as React from "react";
import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  Title,
  SearchContainer,
  Search,
  ButtonsContainer
} from "./Header.styles";
import { Button } from "../UIComponents/Button/Button";
import { NavLink } from "../UIComponents/NavLink/NavLink";
import { uiComponentRouteAndComponentMap } from "../Features/Documentation/Documentation.utils";

export const Header = () => {
  const [searchString, setSearchString] = React.useState("");
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Title>StyleCraft</Title>
      <SearchContainer>
        <Search
          name="search"
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search for components"
        />
        <Button
          varient="contained"
          onClick={() => {
            const componentKeys =  Object.keys(
              uiComponentRouteAndComponentMap 
            ) as (keyof (typeof uiComponentRouteAndComponentMap))[]
            const key = componentKeys.find((key) =>
              key.toLowerCase().includes(searchString.toLowerCase())
            );
            if (!key) {
              navigate("/component-not-found");
            } else {
              navigate(`/components/${uiComponentRouteAndComponentMap[key].path}`);
            }
          }}
        >
          Search
        </Button>
      </SearchContainer>
      <ButtonsContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/components/avatar">Components</NavLink>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
