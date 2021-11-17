import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.jsx';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

function Directory({ directory }) {
  return (
    <div className="directory-menu">
      {directory.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
