import * as React from "react";
import "./Text.styles.css";

type Props = {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  children: React.ReactNode;
};

const getTextClassMapping = (variant: Props["variant"]) => {
  switch (variant) {
    case "h1":
      return "text-h1";

    case "h2":
      return "text-h2";

    case "h3":
      return "text-h3";

    case "h4":
      return "text-h4";

    case "h5":
      return "text-h5";

    case "h6":
      return "text-h6";

    case "subtitle1":
      return "text-subtitle1";

    case "subtitle2":
      return "text-subtitle2";

    case "body1":
      return "text-body1";

    case "body2":
      return "text-body2";

    case "caption":
      return "text-caption";

    case "button":
      return "text-button";

    case "overline":
      return "text-overline";
  }
};

export const Text: React.FC<Props> = ({ variant, children, ...props }) => {
  const textClass = getTextClassMapping(variant);
  return (
    <div {...props} className={textClass}>
      {children}
    </div>
  );
};
