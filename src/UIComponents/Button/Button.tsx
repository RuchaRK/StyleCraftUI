import * as React from "react";
import "./Button.styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  fitContent?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

const getSizeCssClass = (size: ButtonProps["size"]): string => {
  switch (size) {
    case "large": {
      return "large-size";
    }
    case "small": {
      return "small-size";
    }
    case "medium": {
      return "medium-size";
    }
  }
  return "medium-size"
};

const getPrimaryVariantClass = (varient: ButtonProps["varient"]): string => {
  switch (varient) {
    case "contained": {
      return "contained-primary";
    }
    case "outlined": {
      return "outlined-primary";
    }
    case "text": {
      return "text-primary";
    }
  }
  return "contained-primary"
};

const getSecondaryVarientClass = (varient: ButtonProps["varient"]): string => {
  switch (varient) {
    case "contained": {
      return "contained-secondary";
    }
    case "outlined": {
      return "outlined-secondary";
    }
    case "text": {
      return "text-secondary";
    }
  }
  return "contained-secondary"
};

export const Button: React.FC<ButtonProps> = ({
  varient = "contained",
  size = "medium",
  color = "primary",
  fitContent = true,
  disabled = false,
  children,
  ...props
}) => {
  const sizeClass = getSizeCssClass(size);
  const varientClass =
    color === "secondary"
      ? getSecondaryVarientClass(varient)
      : getPrimaryVariantClass(varient);

  return (
    <button
      {...props}
      disabled={disabled}
      className={`base-button ${sizeClass} ${varientClass}`}
    >
      {children}
    </button>
  );
};
