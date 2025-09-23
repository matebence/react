import * as actionType from '../action.js';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:  // We can put this logic, into utility functions
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    default:
      return state; // If no action matches, return the current state
   }
};

export default reducer;