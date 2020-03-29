import React from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Container} from "@material-ui/core";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {store} from "../../redux/reduxStore";

const profile = (props) => {
    return (
        <Container className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </Container>
    );
};

export default profile;
