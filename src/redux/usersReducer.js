const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_COUNT_USERS = 'COUNT_USERS';
const SET_CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const followAC = (userId) => {
    return {type: FOLLOW,userId};
};

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW,userId};
};

export const setUsersAC = (users) => {
    return {type: SET_USERS,users};
};

export const setCountUsersAC = (count) => {
    return {type: SET_COUNT_USERS,count};
};

export const setCurrentPageAC = (page) => {
    return {type: SET_CURRENT_PAGE,page};
};

export const toggeleIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING,isFetching};
};



let initialState = {
    users:[],
    totalUsers: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true

};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(e =>  {
                    if (e.id === action.userId) {
                        return {...e, followed: true};
                    }
                    return e;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e =>  {
                    if (e.id === action.userId) {
                        return {...e, followed: false};
                    }
                    return e;
                })
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




