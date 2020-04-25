import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

const MyPosts = (props) => {
    let post = props.posts.map(post => <Post key={post.id} message={post.text}/>);

    const onSubmit = (formData) => {
        console.log(formData.postMessage)
        props.addPost(formData.postMessage)
    }

    return (
        <div className={c.posts}>
            <h3>Мои посты</h3>
            <AddPost onSubmit={onSubmit} newPostText={props.newPostText} />
            {post}
        </div>
    );
};

export default MyPosts;
