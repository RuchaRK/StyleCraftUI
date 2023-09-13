import * as React from "react";
import "./StatusChip.styles.css";

interface Props extends Pick<React.HTMLAttributes<HTMLDivElement>, "style"| "onClick">{
  severity?: "warning" | "success" | "info" | "error" | "default";
  children: React.ReactNode;
}

const getFilledVariantCSSClass = (severity: Props["severity"]): string => {
  switch (severity) {
    case "error":
      return "chip-error";
    case "info":
      return "chip-info";
    case "success":
      return "chip-success";
    case "warning":
      return "chip-warn";
    case "default":
      return "chip-default";
  }
  return "chip-default";
};

export const StatusChip: React.FC<Props> = ({
  severity = "default",
  children,
  ...props
}) => {
  const variantClass = getFilledVariantCSSClass(severity);

  return (
    <div {...props} className={`chip-base ${variantClass}`}>
      {children}
    </div>
  );
};
