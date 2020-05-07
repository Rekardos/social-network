import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const navbar = () => {
    return (
        <div className={c.navbar}>
            <MenuList className={c.menuList}>
                <MenuItem component={NavLink} to={'/profile'}>
                    Профиль
                </MenuItem>
                <MenuItem component={NavLink} to={'/dialogs'}>
                    Диалоги
                </MenuItem>
                <MenuItem component={NavLink} to={'/users'}>
                    Найти людей
                </MenuItem>
            </MenuList>
        </div>
    );
};

export default navbar;
