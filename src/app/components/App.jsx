import React from 'react';
import Header from './common/Header';
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
