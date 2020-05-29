import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    toggeleIsFetching,
    togglefollowInProgress,
    unfollowThunkCreator
} from "../../redux/usersReducer";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/AuthRedirectComponent";
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsers,
    getUsers
} from "../../redux/user-selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    pageNumber = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    };

    render() {
        return <Users users={this.props.users}
                      totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      pageNumber={this.pageNumber}
                      isFetching={this.props.isFetching}
                      followInProgress={this.props.followInProgress}
                      followThunkCreator={this.props.followThunkCreator}
                      unfollowThunkCreator={this.props.unfollowThunkCreator}/>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state),


    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {


        toggeleIsFetching,

        togglefollowInProgress,

        getUsersThunkCreator,

        followThunkCreator,

        unfollowThunkCreator


    })
)(UsersContainer)
