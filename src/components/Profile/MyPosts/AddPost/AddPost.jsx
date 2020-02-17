import React from "react";
import c from './AddPost.module.css';

const AddPost = () => {
    return (
        <div className={c.addPost}>
            <textarea/>
            <input type='submit' />
        </div>
    );
};

export default AddPost;
