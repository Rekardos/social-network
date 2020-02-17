import React from "react";
import c from './Post.module.css';

const post = () => {
    return (
        <div className={c.post}>
            <img src="https://via.placeholder.com/50"/>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, necessitatibus.</span>
        </div>
    );
};

export default post;
