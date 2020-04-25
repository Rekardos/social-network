import React from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Container} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <Container className={c.profile}>
            <ProfileInfo setStatus={props.setStatus} profileStatus={props.profileStatus} profile={props.profile}/>
            <MyPostsContainer/>
        </Container>
    );
};

export default Profile;
