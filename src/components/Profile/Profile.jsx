import React from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Container} from "@material-ui/core";

const profile = (props) => {

    return (
        <Container className={c.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateText={props.updateText}/>
        </Container>
    );
};

export default profile;
