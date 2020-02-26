import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import {MenuList} from "@material-ui/core";

const navbar = () => {
    return (
        <MenuList className={c.navbar}>
            <MenuItem component={NavLink} to={'/profile'}>
                Профиль
            </MenuItem>
            <MenuItem component={NavLink} to={'/dialogs'}>
                Диалоги
            </MenuItem>
            <MenuItem component={NavLink} to={'/news'}>
                Новости
            </MenuItem>
            <MenuItem component={NavLink} to={'/music'}>
                Музыка
            </MenuItem>
            <MenuItem component={NavLink} to={'/settings'}>
                Настройки
            </MenuItem>
        </MenuList>
    );
};

export default navbar;
