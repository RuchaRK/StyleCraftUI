import * as React from "react";
import "./NavLink.styles.css";
import { NavLink as RouterNavLink } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => {
        return isActive ? "navlink navlink-active" : "navlink";
      }}
    >
      {children}
    </RouterNavLink>
  );
};
