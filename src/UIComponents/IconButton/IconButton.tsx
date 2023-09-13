import * as React from "react";
import "./IconButton.styles.css";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  size?: "small" | "large" | "medium";
  children: React.ReactNode;
  disabled?: boolean;
}

const getSizeCSSClass = (size: IconButtonProps["size"]): string => {
  switch (size) {
    case "small":
      return "icon-small-size";
    case "medium":
      return "icon-medium-size";
    case "large":
      return "icon-large-size";
  }
  return "icon-medium-size"
};

const getColoCSSClass = (color: IconButtonProps["color"]): string => {
  if (color === "secondary") {
    return "icon-color-secondary";
  }
  return "icon-color-primary";
};

export const IconButton: React.FC<IconButtonProps> = ({
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
      className={`icon-base-button ${sizeClass} ${colorClass}`}
    >
      {children}
    </button>
  );
};
