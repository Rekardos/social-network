import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './DialogItem.module.css'
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";


const DialogItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className={style.dialogItem}>
            <Badge color="secondary" overlap="circle"  variant="dot">
                <Avatar src={'https://via.placeholder.com/50'}/>
            </Badge>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;
