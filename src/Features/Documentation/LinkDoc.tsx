import { Documentation } from "../../Components/Documentation";
import { Link } from "../../UIComponents/Link/Link";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import * as React from "react";

export const LinkDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Link with default prop"
        components={[<Link to="/components/link">Click Me</Link>]}
        title="Link"
        codeBlock={`<Link to="/components/link">Click Me</Link>`}
      />
      <Documentation
        description="Link with diffent underline config, it can value always, hover, none"
        components={[
          <Link to="/components/link" underline="always">
            Click Me
          </Link>,
          <Link to="/components/link" underline="hover">
            Click Me
          </Link>,
          <Link to="/components/link" underline="none">
            Click Me
          </Link>
        ]}
        title="Link underline"
        codeBlock={`<Link to="/components/link" underline="always">Click Me</Link>\n<Link to="/components/link" underline="hover">Click Me</Link>\n<Link to="/components/link" underline="never">Click Me</Link>`}
      />
    </DocumentationWrapper>
  );
};
