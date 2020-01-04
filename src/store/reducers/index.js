import { GROUP_REQUEST, GROUP_REQUEST_FAILURE, GROUP_REQUEST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	data: [],
	isLoading: false,
	error: null
};

function comics(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GROUP_REQUEST:
			return { ...state, isLoading: true };
		case GROUP_REQUEST_SUCCESS:
			return { ...state, groups: action.data, isLoading: false };
		case GROUP_REQUEST_FAILURE:
			return { ...state, error: action.error, isLoading: false };
		default:
			return state;
	}
}

export default comics;



  