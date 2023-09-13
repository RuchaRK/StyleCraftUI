import { Documentation } from "../../Components/Documentation";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import { Alert } from "../../UIComponents/Alert/Alert";

export const AlertDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description="Alerts with different with default prop and severtity"
        direction="vertical"
        components={[
          <Alert severity="info">This is Alert Message</Alert>,
          <Alert severity="success">This is Alert Message</Alert>,
          <Alert severity="warning">This is Alert Message</Alert>,
          <Alert severity="error">This is Alert Message</Alert>
        ]}
        title="Alert"
        codeBlock={`<Alert severity="info">This is Alert Message</Alert>\n<Alert severity="success">This is Alert Message</Alert>\n<Alert severity="warning">This is Alert Message</Alert>\n<Alert severity="error">This is Alert Message</Alert>`}
      />
      <Documentation
        description="Alerts with different with filled alert and severtity"
        direction="vertical"
        components={[
          <Alert severity="info" variant="filled">
            This is Alert Message
          </Alert>,
          <Alert severity="success" variant="filled">
            This is Alert Message
          </Alert>,
          <Alert severity="warning" variant="filled">
            This is Alert Message
          </Alert>,
          <Alert severity="error" variant="filled">
            This is Alert Message
          </Alert>
        ]}
        title="Alert"
        codeBlock={`<Alert severity="info">This is Alert Message</Alert>\n<Alert severity="success">This is Alert Message</Alert>\n<Alert severity="warning">This is Alert Message</Alert>\n<Alert severity="error">This is Alert Message</Alert>`}
      />
    </DocumentationWrapper>
  );
};
