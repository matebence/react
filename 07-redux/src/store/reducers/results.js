import * as actionType from '../action.js';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT: // We can put this logic, into utility functions
        return {
            ...state,
            // if we need the access state.counter, then we use the component for that where we can merge everything together
            results: state.results.concat({id: crypto.randomUUID(), value: action.result})
        }
    case actionType.DELETE_RESULT:
        const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        return {
            ...state,
            results: updatedArray
        }
    default:
      return state; // If no action matches, return the current state
   }
};

export default reducer;