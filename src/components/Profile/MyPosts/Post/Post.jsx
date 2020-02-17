import React from "react";
import c from './Post.module.css';

const post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://via.placeholder.com/50"/>
            <span>{props.message}</span>
            <div>Like</div>
        </div>
    );
};

export default post;
