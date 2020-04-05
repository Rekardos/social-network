import React from "react";
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Container} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const profile = () => {
    return (
        <Container className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </Container>
    );
};

export default profile;
