import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectCollection = (state) => {
  return state.collection;
};

export const selectCollectionData = createSelector(
  [selectCollection],
  (collection) => collection
);

export const selectCollectionId = (collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
