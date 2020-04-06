import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCountUsersAC,
    setCurrentPageAC,
    setUsersAC,
    toggeleIsFetchingAC,
    unfollowAC
} from "../redux/usersReducer";
import * as axios from "axios";



class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.toggeleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggeleIsFetching(false);
                    this.props.setCountUsers(response.data.totalCount)
                    this.props.setUsers(response.data.items)
                }
            )
    }

    pageNumber = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggeleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggeleIsFetching(false);
                this.props.setUsers(response.data.items)
            })
    };

    render() {
        return <Users users={this.props.users}
                      totalUsers={this.props.totalUsers}
                      pageSize={this.props.pageSize}
                      pageNumber={this.pageNumber}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}/>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers : state.usersPage.totalUsers,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {

            dispatch(setUsersAC(users))
        },

        setCountUsers: (count) => {
            dispatch(setCountUsersAC(count))
        },

        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },

        toggeleIsFetching: (isFetching) => {
            dispatch(toggeleIsFetchingAC(isFetching))
        }
    }
};




export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);
