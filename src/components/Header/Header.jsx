import React from "react";
import c from './Header.module.css';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const Header = (props) => {


    return (
        <div className={c.header}>
            <img src="https://via.placeholder.com/60?text=Logo" alt={'logo'}/>
            <div className={c.login}>
                <Button component={NavLink} to={'/login'}>{props.isAuth ?  props.login : 'Login' }</Button>
            </div>
        </div>

    );
};

export default Header;
