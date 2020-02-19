import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={c.item}><NavLink to={'/profile'}>Profile</NavLink></div>
            <div className={c.item}><NavLink to={'/messages'}>Messages</NavLink></div>
            <div className={c.item}><NavLink to={'/news'}>News</NavLink></div>
            <div className={c.item}><NavLink to={'/music'}>Music</NavLink></div>
            <div className={c.item}><NavLink to={'/settings'}>Settings</NavLink></div>
        </div>
    );
};

export default navbar;
