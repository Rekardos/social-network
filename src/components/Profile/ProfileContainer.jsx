import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    setProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/AuthRedirectComponent";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
    }


    render() {
        return (
            <Profile {...this.props} setStatus={this.props.setProfileStatusThunkCreator}/>
        );
    }
}


let mapStateToPorps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        authId: state.auth.id
    }
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToPorps, {getProfileThunkCreator, getProfileStatusThunkCreator, setProfileStatusThunkCreator})
)(ProfileContainer)
