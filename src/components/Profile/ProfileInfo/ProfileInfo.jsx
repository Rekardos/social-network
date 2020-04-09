import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <CircularProgress/>
    }


    return (
        <Box>
            <img src={props.profile.photos.large}alt=""/>
            <Typography variant={'h3'}>{props.profile.fullName}</Typography>

        </Box>
    );
};

export default ProfileInfo;
