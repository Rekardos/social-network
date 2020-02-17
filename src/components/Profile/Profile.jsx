import React from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const profile = () => {
    return (
        <div className={c.profile}>
            <img src="https://via.placeholder.com/1100x200?text=Content"/>
            <MyPosts/>
        </div>
    );
};

export default profile;
