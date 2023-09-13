import * as React from "react";
import "./FloatingActionButton.styles.css";

interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | string;
  size?: "small" | "large" | "medium";
  children?: React.ReactNode;
  disabled?: boolean;
}

const getSizeCSSClass = (size: FABProps["size"]): string => {
  switch (size) {
    case "small":
      return "floating-small-size";
    case "medium":
      return "floating-medium-size";
    case "large":
      return "floating-large-size";
  }
  return "floating-medium-size";
};

const getColoCSSClass = (color: FABProps["color"]): string => {
  if (color === "primary") {
    return "floating-color-primary";
  } else {
    return "floating-color-secondary";
  }
};

export const FloatingActionButton: React.FC<FABProps> = ({
  color = "primary",
  size = "small",
  children,
  disabled = false,
  ...props
}) => {
  const sizeClass = getSizeCSSClass(size);
  const colorClass = getColoCSSClass(color);

  return (
    <button
      {...props}
      disabled={disabled}
      className={`floating-base-button ${sizeClass} ${colorClass}`}
    >
      {children}
    </button>
  );
};
