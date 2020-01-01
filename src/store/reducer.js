import { createStore } from 'redux';

function getMarvelCharacters(state = {comics: []}, action ) {
  switch (action.type) {
      case 'FETCH_CHARAC': 
        return { ...state, comics: [ ...state.data, action.data.comics] };
      default:
        return state;
  }

}

const store = createStore(getMarvelCharacters);

export default store;