import { createStore } from 'redux';
//import { thunk } from 'redux-thunk';

function getMarvelCharacters(state = {comics: []}, action ) {
  switch (action.type) {
      case 'FETCH_CHARAC': 
        return { ... state, comics: action.data.comics, };
      default:
        return state;
  }

}

const store = createStore(getMarvelCharacters);

export default store;