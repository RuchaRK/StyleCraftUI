import * as React from "react";
import "./Badge.styles.css";

interface Props extends Pick<React.HTMLAttributes<HTMLDivElement>, "style"| "onClick"> {
  color?: "primary" | "secondary";
  children: React.ReactNode;
  badgeContent: React.ReactNode;
}

const getBadgeColor = (color: Props["color"]): string => {
  switch (color) {
    case "primary":
      return "badge-primary";
    case "secondary":
      return "badge-secondary";
  }
  return "badge-primary";
};

export const Badge: React.FC<Props> = ({
  badgeContent,
  children,
  color = "primary",
  ...props
}) => {
  const colorClass = getBadgeColor(color);

  return (
    <div className="badge-container">
      <div {...props} className={`badge ${colorClass}`}>
        {badgeContent}
      </div>
      {children}
    </div>
  );
};
