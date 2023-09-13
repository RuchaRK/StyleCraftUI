import { IconButtonDoc } from "./IconButtonDoc";
import { LinkDoc } from "./LinkDoc";
import { AvatarDoc } from "./AvatarDoc";
import { AlertDoc } from "./AlertDoc";
import { BadgeDoc } from "./BadgeDoc";
import { StatusChipDoc } from "./StatusChipDoc";
import { TextDoc } from "./TextDoc";
import { NavLinkDoc } from "./NavLinkDoc";
import { CardDoc } from "./CardDoc";
import { ButtonDoc } from "./ButtonDoc";
import { FloatingButtonDoc } from "./FloatingButtonDoc";

export const uiComponentRouteAndComponentMap = {
  avatar: { component: AvatarDoc, path: "avatar" },
  alert: { component: AlertDoc, path: "alert" },
  badge: { component: BadgeDoc, path: "badge" },
  button: { component: ButtonDoc, path: "button" },
  card: { component: CardDoc, path: "card" },
  iconButton: { component: IconButtonDoc, path: "icon-button" },
  floatingButton: { component: FloatingButtonDoc, path: "floating-button" },
  link: { component: LinkDoc, path: "link" },
  navLink: { component: NavLinkDoc, path: "nav-link" },
  statusChip: { component: StatusChipDoc, path: "status-chip" },
  text: { component: TextDoc, path: "text" }
};
