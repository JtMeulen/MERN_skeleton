const initialState = {
  name: 'MERN App',
  clicks: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CLICK':
      return {
        ...state,
        clicks: state.clicks + action.amount
      }
    case 'SUBSTRACT_CLICK':
      return {
        ...state,
        clicks: state.clicks - action.amount,
      };
    default:
      return state;
  }
}

export default reducer;
