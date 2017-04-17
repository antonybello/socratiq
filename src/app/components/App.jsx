import React from 'react';
import Header from './common/header/Header';
import Tagbar from './common/tagbar/Tagbar'
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div>
      <Header />
      <Tagbar />
      <div className="container main">
        {children}
      </div>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
