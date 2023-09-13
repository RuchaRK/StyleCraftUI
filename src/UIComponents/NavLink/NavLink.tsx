import * as React from "react";
import "./NavLink.styles.css";
import { NavLinkProps, NavLink as RouterNavLink } from "react-router-dom";

interface LinkProps extends NavLinkProps{
  children: React.ReactNode;
  to: string;
}

export const NavLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  return (
    <RouterNavLink
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? "navlink navlink-active" : "navlink";
      }}
    >
      {children}
    </RouterNavLink>
  );
};
