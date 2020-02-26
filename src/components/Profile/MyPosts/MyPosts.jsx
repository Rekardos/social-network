import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {

    let post = props.profilePage.posts.map(post => <Post message={post.text}/>);
    return (
        <div className={c.posts}>
            <h3>Мои посты</h3>
            <AddPost profilePage={props.profilePage} addPost={props.addPost} updateText={props.updateText}/>
            {post}
        </div>
    );
};

export default MyPosts;
