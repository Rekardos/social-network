import React from "react";
import c from './Navbar.module.css';

const navbar = () => {
    return (
        <div className={c.navbar}>
            <div className={c.item}>Profile</div>
            <div className={c.item}>Messages</div>
            <div className={c.item}>Friends</div>
            <div className={c.item}>News</div>
        </div>
    );
};

export default navbar;
