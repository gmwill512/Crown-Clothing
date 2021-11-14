import React, { useState } from 'react';
import ShopData from '../../shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview';

function ShopPage(props) {
  const [collections, setCollections] = useState(ShopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview id={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
