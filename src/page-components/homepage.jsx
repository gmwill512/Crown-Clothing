import React from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory/directory.jsx';

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu"></div>
      <Directory />
    </div>
  );
}

export default Homepage;
