import React from "react";
import c from './Navbar.module.css';

const navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={c.item}><a href={'/profile'}>Profile</a></div>
            <div className={c.item}><a href={'/messages'}>Messages</a></div>
            <div className={c.item}><a href={'/friends'}>Friends</a></div>
            <div className={c.item}><a href={'/news'}>News</a></div>
        </div>
    );
};

export default navbar;
