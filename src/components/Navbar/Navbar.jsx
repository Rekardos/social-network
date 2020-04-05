import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {Box} from "@material-ui/core";

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
                <MenuItem component={NavLink} to={'/news'}>
                    Новости
                </MenuItem>
                <MenuItem component={NavLink} to={'/users'}>
                    Найти людей
                </MenuItem>
                <MenuItem component={NavLink} to={'/music'}>
                    Музыка
                </MenuItem>
                <MenuItem component={NavLink} to={'/settings'}>
                    Настройки
                </MenuItem>
            </MenuList>
            {/*<div className={c.friendsWrapper}>*/}
            {/*    <h3>Друзья</h3>*/}
            {/*    <div className={c.friends}>*/}

            {/*        <Box>*/}
            {/*            <Badge color="secondary" overlap="circle" variant="dot">*/}
            {/*                <Avatar src={'https://via.placeholder.com/50'}/>*/}
            {/*            </Badge>*/}
            {/*        </Box>*/}
            {/*        <Box>*/}
            {/*            <Badge color="secondary" overlap="circle" variant="dot">*/}
            {/*                <Avatar src={'https://via.placeholder.com/50'}/>*/}
            {/*            </Badge>*/}
            {/*        </Box>*/}
            {/*        <Box>*/}
            {/*            <Badge color="secondary" overlap="circle" variant="dot">*/}
            {/*                <Avatar src={'https://via.placeholder.com/50'}/>*/}
            {/*            </Badge>*/}
            {/*        </Box>*/}
            {/*        <Box>*/}
            {/*            <Badge color="secondary" overlap="circle" variant="dot">*/}
            {/*                <Avatar src={'https://via.placeholder.com/50'}/>*/}
            {/*            </Badge>*/}
            {/*        </Box>*/}
            {/*        <Box>*/}
            {/*            <Badge color="secondary" overlap="circle" variant="dot">*/}
            {/*                <Avatar src={'https://via.placeholder.com/50'}/>*/}
            {/*            </Badge>*/}
            {/*        </Box>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>

    );
};

export default navbar;
