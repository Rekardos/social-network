import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {
    let post = props.posts.map(post => <Post key={post.id} message={post.text}/>);
    return (
        <div className={c.posts}>
            <h3>Мои посты</h3>
            <AddPost newPostText={props.newPostText} addPost={props.addPost} textOnChange={props.textOnChange}/>
            {post}
        </div>
    );
};

export default MyPosts;
