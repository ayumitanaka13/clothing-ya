import React from 'react'

// import './collection-preview.styles.scss'
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items}) => (
    <CollectionPreviewContainer>
    <TitleContainer>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
    // <div className="collection-preview">
    //     <h1 className="title">{title}</h1>
    //     <div className="preview">
    //         {
    //             items.filter((item, index) => index < 4 ).map((item) => (
    //                 <CollectionItem key={item.id} item={item} />
    //             ))
    //         }
    //     </div>
    // </div>
)

export default CollectionPreview