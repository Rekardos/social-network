import React from "react";
import c from './Post.module.css';
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const post = (props) => {
    return (
        <Box className={c.post}>
            <Avatar src="https://via.placeholder.com/50"/>
            <span>{props.message}</span>
        </Box>
    );
};

export default post;
