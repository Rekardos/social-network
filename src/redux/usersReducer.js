import {API} from "../api/api";


//const-type action creators
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_COUNT_USERS = 'COUNT_USERS';
const SET_CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS';


// action-creators
export const follow = (userId) => {
    return {type: FOLLOW, userId};
};

export const unfollow = (userId) => {
    return {type: UNFOLLOW, userId};
};

export const setUsers = (users) => {
    return {type: SET_USERS, users};
};

export const setCountUsers = (count) => {
    return {type: SET_COUNT_USERS, count};
};

export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, page};
};

export const toggeleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const togglefollowInProgress = (isFetching, userId) => {
    return {type: FOLLOWING_IS_PROGRESS, isFetching, userId};
};


//thunk creators
export const getUsersThunkCreator = (currentPage,pageSize) => (dispatch) => {
    dispatch(toggeleIsFetching(true));
    API.getUsers(currentPage,pageSize)
        .then(response => {
            dispatch(toggeleIsFetching(false));
            dispatch(setCountUsers(response.totalCount))
            dispatch(setUsers(response.items))
            }
        )
}

export const followThunkCreator = (userId) => (dispatch) => {
    dispatch(togglefollowInProgress(true,userId))
    API.unfollow(userId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(togglefollowInProgress(false,userId))
        })
}

export const unfollowThunkCreator = (userId) => (dispatch) => {
    dispatch(togglefollowInProgress(true,userId))
    API.unfollow(userId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(togglefollowInProgress(false,userId))
        })
}



let initialState = {
    users: [],
    totalUsers: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followInProgress: []

};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true};
                    }
                    return e;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false};
                    }
                    return e;
                })
            };


        case FOLLOWING_IS_PROGRESS:

            return {
                ...state,
                followInProgress: action.isFetching ?
                    [...state.followInProgress, action.userId] :
                    state.followInProgress.filter(id => id !== action.userId)
            };

        case SET_USERS:
            return {...state, users: [...action.users]};


        case SET_COUNT_USERS:
            return {...state, totalUsers: action.count};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};


        default:
            return state;
    }

};




