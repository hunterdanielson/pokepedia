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
  
});
