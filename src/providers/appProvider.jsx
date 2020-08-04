import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { fetchPokemon } from '../services/pokemonApi';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = ({ target }) => {
    if(target.name === 'next') {
      dispatch({ type: 'NEXT_PAGE' });
    } 
    if(target.name === 'previous') {
      dispatch({ type: 'PREVIOUS_PAGE' });
    }
  };

  useEffect(() => {
    const { pageNum } = state;
    fetchPokemon((pageNum - 1) * 20)
      .then(list => dispatch({ type: 'SET_LIST', payload: list }));
  }, [state.pageNum]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {state.pageNum > 1 && <button name='previous' onClick={handleClick}>Previous</button>}
      {state.pageNum < state.totalPages && <button name='next' onClick={handleClick}>Next</button>}
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
