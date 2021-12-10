import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const INITIAL_STATE = {};
  const [state, setState] = useState(INITIAL_STATE);

  const data = {
    state,
    setState,
  };

  const API_RESULTS_INITIAL_STATE = [];

  const [result, setResult] = useState(API_RESULTS_INITIAL_STATE);

  return (
    <MyContext.Provider value={ { data, result, setResult } }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
