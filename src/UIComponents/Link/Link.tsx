import * as React from "react";
import "./Link.styles.css";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  underline?: "always" | "hover" | "none";
  to: string;
}

const getUnderlineCSSClass = (size: LinkProps["underline"]): string => {
  switch (size) {
    case "always":
      return "always-underline";
    case "hover":
      return "hover-underline";
    case "none":
      return "no-underline";
  }
  return "always-underline";
};

export const Link: React.FC<LinkProps> = ({
  children,
  underline = "always",
  to,
  ...props
}) => {
  const underlineCss = getUnderlineCSSClass(underline);

  return (
    <RouterLink {...props} to={to} className={`link-base  ${underlineCss}`}>
      {children}
    </RouterLink>
  );
};
