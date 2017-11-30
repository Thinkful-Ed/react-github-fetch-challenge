import {
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_REQUEST,
    FETCH_REPOS_ERROR
} from './actions';

const initialState = {
    repos: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    console.log(action);
    if (action.type === FETCH_REPOS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === FETCH_REPOS_SUCCESS) {
        return Object.assign({}, state, {
            repos: action.repos,
            loading: false
        });
    }
    if (action.type === FETCH_REPOS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
};
