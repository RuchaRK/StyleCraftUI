import * as React from "react";
import "./Alert.styles.css";

import { BiErrorCircle, BiError } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

interface Props {
  severity: "warning" | "success" | "info" | "error";
  variant?: "filled" | "outlined";
  hideIcon?: boolean;
  children: React.ReactNode;
}

const getFilledVariantCSSClass = (size: Props["severity"]): string => {
  switch (size) {
    case "error":
      return "alert-error";
    case "info":
      return "alert-info";
    case "success":
      return "alert-success";
    case "warning":
      return "alert-warn";
  }
};

const getOutlineddVariantCSSClass = (size: Props["severity"]): string => {
  switch (size) {
    case "error":
      return "alert-error-outlined";
    case "info":
      return "alert-info-outlined";
    case "success":
      return "alert-success-outlined";
    case "warning":
      return "alert-warn-outlined";
  }
};

const getIcon = (size: Props["severity"]): React.ReactNode => {
  switch (size) {
    case "error":
      return <BiErrorCircle className="alert-error-icon" />;
    case "info":
      return <BiErrorCircle className="alert-info-icon" />;
    case "success":
      return <BsCheckCircle className="alert-success-icon" />;
    case "warning":
      return <BiError className="alert-warn-icon" />;
  }
};

export const Alert: React.FC<Props> = ({
  severity,
  children,
  variant = "outlined",
  hideIcon,
  ...props
}) => {
  const variantClass =
    variant === "filled"
      ? getFilledVariantCSSClass(severity)
      : getOutlineddVariantCSSClass(severity);

  const icon = getIcon(severity);

  return (
    <div {...props} className={`alert-base  ${variantClass}`}>
      {hideIcon ? null : icon}
      {children}
    </div>
  );
};
