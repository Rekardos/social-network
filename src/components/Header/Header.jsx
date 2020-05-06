import React from "react";
import c from './Header.module.css';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import {logOutThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";

const Header = (props) => {


    return (
        <div className={c.header}>
            <img src="https://via.placeholder.com/60?text=Logo" alt={'logo'}/>
            <div className={c.login}>
                {props.isAuth ?
                    <div>
                        {props.login}
                        <button onClick={props.logOutThunkCreator}>Выйти</button>
                    </div> :
                    <div>
                        <Button component={NavLink} to={'/login'}>Войти</Button>
                    </div>}
            </div>
        </div>
    );
};

export default connect(null,{logOutThunkCreator})(Header);
