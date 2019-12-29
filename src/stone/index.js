import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

function getMarvelCharacters(state = {company: [], subgroup:[], cart:[], action} ) {
  switch (action.type) {
      case 'FETCH_CHARAC': 
        return { ... state, company: action.data.empresa, subgroup: action.data.subgroup };
      case 'ADD_CART': 
        return { ... state, cart: action.data };
      default:
        return state;
  }

}

const store = createStore(getMarvelCharacters, applyMiddleware(thunk));

export default store;