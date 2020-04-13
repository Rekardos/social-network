import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCountUsers,
    setCurrentPage,
    setUsers,
    toggeleIsFetching, togglefollowInProgress,
    unfollow
} from "../../redux/usersReducer";
import {API} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.toggeleIsFetching(true);
        API.getUsers(this.props.currentPage,this.props.pageSize)
            .then(response => {
                    this.props.toggeleIsFetching(false);
                    this.props.setCountUsers(response.totalCount)
                    this.props.setUsers(response.items)
                }
            )
    }

    pageNumber = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggeleIsFetching(true);
        API.getUsers(page,this.props.pageSize)
            .then(response => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(response.items)
            })
    };

    render() {
        return <Users users={this.props.users}
                      totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      pageNumber={this.pageNumber}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      followInProgress={this.props.followInProgress}
                      togglefollowInProgress={ this.props.togglefollowInProgress}/>
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

    togglefollowInProgress


})(UsersContainer);
