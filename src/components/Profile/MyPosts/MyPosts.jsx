import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <h3>My Posts</h3>
            <AddPost/>
            <Post message={"lorem12"}/>
            <Post message={"lorem213231"}/>
            <Post message={"3213213213"}/>
            <Post message={"321412"}/>
            <Post message={"3333"}/>
        </div>
    );
};

export default MyPosts;
