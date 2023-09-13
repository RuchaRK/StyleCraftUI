import { Documentation } from "../../Components/Documentation";
import { NavLink } from "../../UIComponents/NavLink/NavLink";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import * as React from "react";

export const NavLinkDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description=""
        components={[
          <NavLink to="/">Home</NavLink>,
          <NavLink to="/components">Components</NavLink>
        ]}
        title="NavLink"
        codeBlock={`<NavLink to="/">Home</NavLink>\n<NavLink to="/components">Components</NavLink>
      `}
      />
    </DocumentationWrapper>
  );
};
