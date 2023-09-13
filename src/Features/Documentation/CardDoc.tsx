import { Documentation } from "../../Components/Documentation";
import { Card } from "../../UIComponents/Card/Card";
import { DocumentationWrapper } from "../../Components/DocumentationWrapper";
import * as React from "react";

export const CardDoc = () => {
  return (
    <DocumentationWrapper>
      <Documentation
        description=""
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            imgUrl="https://picsum.photos/200/300"
            badgeContent="New"
          />
        ]}
        title="Card With Badge"
        codeBlock={`<Card 
  title="Card Title"
  iscription="card discription"
  imgUrl="https://picsum.photos/200/300"
  badgeContent="New"
/>`}
      />
      <Documentation
        description=""
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            imgUrl="https://picsum.photos/200/300"
            onDismissClick={() => {
              window.alert("card dismissed");
            }}
          />
        ]}
        title="Card With Dismiss"
        codeBlock={`<Card
  title="Card Title"
  discription="card discription"
  imgUrl="https://picsum.photos/200/300"
  onDismissClick={() => {
    window.alert("card dismissed");
  }}
/>`}
      />
      <Documentation
        description=""
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            showOverlayText
            imgUrl="https://picsum.photos/200/300"
          />
        ]}
        title="Card With Overlay Text"
        codeBlock={`<Card
  title="Card Title"
  discription="card discription"
  showOverlayText
  imgUrl="https://picsum.photos/200/300"
/>`}
      />
      <Documentation
        description=""
        components={[
          <Card title="Card Title" discription="card discription" />
        ]}
        title="Card With Only Text"
        codeBlock={`<Card title="Card Title" discription="card discription" />`}
      />
      <Documentation
        description=""
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            showOverlayText
            imgUrl="https://picsum.photos/200/300"
            showShadow
          />
        ]}
        title="Card With Shadow"
        codeBlock={`<Card
  title="Card Title"
  discription="card discription"
  showOverlayText
  imgUrl="https://picsum.photos/200/300"
  showShadow
/>`}
      />
      <Documentation
        description="Vertical Card"
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            imgUrl="https://picsum.photos/200/300"
            badgeContent="New"
            onDismissClick={() => {}}
            showShadow
          />
        ]}
        title="Vertical Card"
        codeBlock={`<Card
  title="Card Title"
  discription="card discription"
  imgUrl="https://picsum.photos/200/300"
  badgeContent="New"
  onDismissClick={() => {}}
  showShadow
/>`}
      />
      <Documentation
        description=""
        components={[
          <Card
            title="Card Title"
            discription="card discription"
            imgUrl="https://picsum.photos/200/300"
            direction="horizontal"
            badgeContent="New"
            onDismissClick={() => {}}
            showShadow
          />
        ]}
        title="Horizontal Card"
        codeBlock={`<Card
  title="Card Title"
  discription="card discription"
  imgUrl="https://picsum.photos/200/300"
  direction="horizontal"
  badgeContent="New"
  onDismissClick={() => {}}
  showShadow
/>`}
      />
    </DocumentationWrapper>
  );
};
