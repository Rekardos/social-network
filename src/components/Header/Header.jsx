import React from "react";
import c from './Header.module.css';

const header = () => {
    return (
        <div className={c.header}>
            <img src="https://via.placeholder.com/60?text=Logo" alt={'logo'}/>
        </div>
    );
};

export default header;
