import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <h3>My Posts</h3>
            <AddPost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;
