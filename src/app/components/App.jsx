import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Tagbar from './common/tagbar/Tagbar'
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div>
      <HeaderContainer />
      <Tagbar />
      <div className="container main">
        {children}
      </div>
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
