import { Documentation } from "../../Components/Documentation";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import * as React from "react";
import { StatusChip } from "../../UIComponents/StatusChip/StatusChip";

export const StatusChipDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Show info, status in chips with severity"
        components={[
          <StatusChip>Default</StatusChip>,
          <StatusChip severity="info">New</StatusChip>,
          <StatusChip severity="success">Completed</StatusChip>,
          <StatusChip severity="warning">Stucked</StatusChip>,
          <StatusChip severity="error">Failed</StatusChip>
        ]}
        title="Status Chip"
        codeBlock={`<StatusChip>Default</StatusChip>\n<StatusChip severity="info">New</StatusChip>\n<StatusChip severity="success">Completed</StatusChip>\n<StatusChip severity="warning">Stucked</StatusChip>\n<StatusChip severity="error">Failed</StatusChip>`}
      />
    </DocumentationWrapper>
  );
};
