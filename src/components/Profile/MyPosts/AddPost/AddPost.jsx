import React from "react";
import c from './AddPost.module.css';

const AddPost = () => {
    return (
        <div className={c.addPost}>
            <div>
                <textarea/>
            </div>
            <div>
                <input type='submit'/>
            </div>
        </div>
    );
};

export default AddPost;
