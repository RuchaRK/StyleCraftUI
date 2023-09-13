import { Documentation } from "../../Components/Documentation";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { Badge } from "../../UIComponents/Badge/Badge";
import { BsAirplane } from "react-icons/bs";
import { Avatar } from "../../UIComponents/Avatar/Avatar";

export const BadgeDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Badge with any kind of children"
        components={[
          <Badge badgeContent={20}>
            <BsAirplane />
          </Badge>,
          <Badge badgeContent={2} color="secondary">
            Any Content
          </Badge>,
          <Badge badgeContent={777787} color="primary">
            <Avatar>H</Avatar>
          </Badge>
        ]}
        title="Badge"
        codeBlock={`<Badge badgeContent={20}><BsAirplane /></Badge>\n<Badge badgeContent={2} color="secondary">Any Content</Badge>\n<Badge badgeContent={777787} color="primary"><Avatar>H</Avatar></Badge>`}
      />
    </DocumentationWrapper>
  );
};
