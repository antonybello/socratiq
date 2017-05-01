import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Tagbar from './common/tagbar/Tagbar'
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div>
      <div className="top-container">
        <HeaderContainer />
        <Tagbar />
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
