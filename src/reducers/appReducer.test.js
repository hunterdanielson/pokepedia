import reducer from './appReducer';

describe('app reducer', () => {
  it('increments page with NEXT_PAGE type', () => {
    const state = {
      pageNum: 1
    };

    const action = {
      type: 'NEXT_PAGE'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      pageNum: 2
    });
  });

  it('decrements page with PREVIOUS_PAGE type', () => {
    const state = {
      pageNum: 4
    };

    const action = {
      type: 'PREVIOUS_PAGE'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      pageNum: 3
    });
  });

  it('sets the list with the SET_LIST action type', () => {
    const state = {
      list: []
    };

    const action = {
      type: 'SET_LIST',
      payload: {
        results: [
          { 
            name: 'bulbasaur',
            url: 'bulbasaur.com'
          }
        ]
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      list: [{
        name: 'bulbasaur',
        url: 'bulbasaur.com'
      }]
    });
  });

  it('toggles the theme from light to dark', () => {
    const state = {
      theme: 'light'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      theme: 'dark'
    });
  });
  
  it('toggles the theme from dark to light', () => {
    const state = {
      theme: 'dark'
    };

    const action = {
      type: 'TOGGLE_THEME'
    };

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      theme: 'light'
    });
  });

});
