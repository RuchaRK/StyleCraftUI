import * as React from "react";
import "./Avatar.styles.css";

interface Props {
  size?: "small" | "large" | "medium";
  variant?: "circular" | "square";
}

type ContentProp = { src: string; alt: string } | { children: React.ReactNode };

const getSizeCSSClass = (size: Props["size"]): string => {
  switch (size) {
    case "small":
      return "avatar-small-size";
    case "medium":
      return "avatar-medium-size";
    case "large":
      return "avatar-large-size";
  }
  return "avatar-medium-size";
};

const getVariantCSSClass = (size: Props["variant"]): string => {
  switch (size) {
    case "circular":
      return "avatar-circular";
    case "square":
      return "avatar-square";
  }
  return "avatar-circular";
};

export const Avatar: React.FC<Props & ContentProp> = ({
  size,
  variant,
  ...props
}) => {
  const sizeClass = getSizeCSSClass(size);
  const variantClass = getVariantCSSClass(variant);

  return (
    <div {...props} className={`avatar-base ${sizeClass} ${variantClass}`}>
      {"src" in props ? (
        <img alt={props.alt} src={props.src} height="100%" width="100%" />
      ) : (
        props.children
      )}
    </div>
  );
};
