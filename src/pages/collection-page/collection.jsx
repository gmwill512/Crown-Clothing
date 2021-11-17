import React from 'react';
import './collection.scss';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionId } from '../../redux/collections/collections.selector';

function Collections({ collection }) {
  let { collectionid } = useParams();
  console.log(collection);
  return <div className="category">Hello {collectionid}</div>;
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionId(ownProps.collectionid)(state),
});

export default connect(mapStateToProps)(Collections);
