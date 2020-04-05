import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        textOnChange: (body) => dispatch(newPostTextActionCreator(body))
    }
};

let mapStateToProps = (state) => {


    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
