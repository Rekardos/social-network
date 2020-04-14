import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunkCreator, setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/AuthRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        let meProfileId =  this.props.meProfile.id

        if(userId) {
            this.props.getProfileThunkCreator(userId)
        }else {
            this.props.getProfileThunkCreator(meProfileId)
        }

    }

    render() {

        return (
            <Profile {...this.props}/>
        );
    }
}


let mapStateToPorps = (state) => {

    return {
        profile: state.profilePage.profile,
        meProfile: state.auth
    }
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToPorps,{setProfile,getProfileThunkCreator})
)(ProfileContainer)
