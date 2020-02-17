import React from "react";
import c from './Footer.module.css';


const footer = () => {
    return (
        <div className={c.footer}>
            <span className={c.item}>One</span>
            <span className={c.item}>Two</span>
            <span className={c.item}>Three</span>
            <span className={c.item}>Four</span>
        </div>
    );
};

export default footer;
