import React from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Container} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {


    componentDidMount() {


        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
            .then(response => {

                    this.props.setProfile(response.data)
                }
            )
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

export default connect(mapStateToPorps,{setProfile})(withRouterProfileComponentContainer);
