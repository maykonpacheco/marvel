import { GROUP_REQUEST, GROUP_REQUEST_SUCCESS, GROUP_REQUEST_FAILURE } from './types';
import { getAll } from './../../services';


export function listGroup() {
    return async (dispatch) => {
        dispatch({ type: GROUP_REQUEST });
        try {
            const groups = await getAll();
            dispatch({ type: GROUP_REQUEST_SUCCESS, groups });
            return groups;
        } catch (error) {
            dispatch({ type: GROUP_REQUEST_FAILURE, error });
        }
    };
}