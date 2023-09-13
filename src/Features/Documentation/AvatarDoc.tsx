import { Documentation } from "../../Components/Documentation";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { Avatar } from "../../UIComponents/Avatar/Avatar";

export const AvatarDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Avatar with default prop"
        components={[
          <Avatar
            src="https://randomuser.me/api/portraits/men/87.jpg"
            alt="profile"
          />,
          <Avatar>H</Avatar>
        ]}
        title="Avatar"
        codeBlock={`<Avatar src="https://randomuser.me/api/portraits/men/87.jpg" alt="profile"/>\n<Avatar>H</Avatar>`}
      />
      <Documentation
        description="Link with diffent underline config, it can value always, hover, none"
        components={[
          <Avatar
            size="small"
            src="https://randomuser.me/api/portraits/men/87.jpg"
            alt="profile"
          />,
          <Avatar
            size="medium"
            src="https://randomuser.me/api/portraits/men/87.jpg"
            alt="profile"
          />,
          <Avatar
            size="large"
            src="https://randomuser.me/api/portraits/men/87.jpg"
            alt="profile"
          />
        ]}
        title="Link underline"
        codeBlock={`<Avatar size="small" src="https://randomuser.me/api/portraits/men/87.jpg" alt="profile"/>\n<Avatar  size="medium" src="https://randomuser.me/api/portraits/men/87.jpg" alt="profile"/>\n<Avatar size="large" src="https://randomuser.me/api/portraits/men/87.jpg" alt="profile"/>`}
      />
    </DocumentationWrapper>
  );
};
