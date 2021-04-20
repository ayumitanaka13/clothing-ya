import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

import CollectionItem from "../collection-item/collection-item.component";

// import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title && title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items &&
          items
            .filter((item, idx) => idx < 4)
            .map((item) => <CollectionItem key={item.id} item={item} />)}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
