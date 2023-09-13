import * as React from "react";
import "./Card.styles.css";
import { Text } from "../Text/Text";
import { StatusChip } from "../StatusChip/StatusChip";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  title: string;
  discription: string;
  imgUrl?: string;
  showOverlayText?: boolean;
  showShadow?: boolean;
  badgeContent?: React.ReactNode;
  onDismissClick?: () => void;
  direction?: "horizontal" | "vertical";
}

export const Card: React.FC<Props> = ({
  title,
  badgeContent,
  discription,
  imgUrl,
  onDismissClick,
  showOverlayText,
  showShadow,
  direction = "vertical"
}) => {
  const directionClass =
    direction === "vertical" ? "card-vertical" : "card-horizontal";
  const shdowClass = showShadow ? "card-shadow" : "";
  const overlayClass = showOverlayText ? "card-text-overlay" : "";
  return (
    <div className={`card ${shdowClass} ${directionClass} ${overlayClass}`}>
      {imgUrl && <img src={imgUrl} alt={title} />}
      <div className="card-text">
        <Text variant="h4">{title}</Text>
        <Text variant="body1">{discription}</Text>
      </div>
      <div className="card-hanged-element">
        {badgeContent && (
          <StatusChip severity="info">{badgeContent}</StatusChip>
        )}
        {onDismissClick && (
          <IconButton>
            <AiOutlineClose size={20} onClick={onDismissClick} />
          </IconButton>
        )}
      </div>
    </div>
  );
};
