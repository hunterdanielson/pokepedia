export const initialState = {
  pageNum: 1,
  totalCount: 964,
  list: [],
  theme: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'NEXT_PAGE': 
      return { ...state, pageNum: state.pageNum + 1 };
    case 'PREVIOUS_PAGE':
      return { ...state, pageNum: state.pageNum - 1 };
    case 'SET_LIST': 
      return { ...state, list: action.payload.results };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default: 
      return state;
  }
}
