import React, { useState, useEffect } from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);

  return (
    <div className="shop-page">
      {collections &&
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  );
};

export default ShopPage;
