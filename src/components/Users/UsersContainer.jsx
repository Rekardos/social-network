import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    setCountUsers,
    setCurrentPage,
    setUsers,
    toggeleIsFetching, togglefollowInProgress,
    unfollow, unfollowThunkCreator
} from "../../redux/usersReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
    }

    pageNumber = (page) => {
        this.props.getUsersThunkCreator(page,this.props.pageSize)
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
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,




    }
};


export default connect(mapStateToProps, {
    follow,

    unfollow,

    setUsers,

    setCountUsers,

    setCurrentPage,

    toggeleIsFetching,

    togglefollowInProgress,

    getUsersThunkCreator,

    followThunkCreator,

    unfollowThunkCreator


})(UsersContainer);
