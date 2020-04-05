const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_COUNT_USERS = 'COUNT_USERS';
const SET_CURRENT_PAGE = 'CURRENT_PAGE';

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



let initialState = {
    users:[],
    totalUsers: 0,
    pageSize: 10,
    currentPage: 1

};

export const usersReducer = (state = initialState, action) => {
debugger

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


        default:
            return state;
    }

};




