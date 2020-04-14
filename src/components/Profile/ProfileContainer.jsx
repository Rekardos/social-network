import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileThunkCreator, setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.props.getProfileThunkCreator(userId)

    }

    render() {

        return (
            <Profile {...this.props}/>
        );
    }
}


let mapStateToPorps = (state) => {

    return {
        profile: state.profilePage.profile
    }
};

let withRouterProfileComponentContainer = withRouter(ProfileContainer)

export default connect(mapStateToPorps,{setProfile,getProfileThunkCreator})(withRouterProfileComponentContainer);
