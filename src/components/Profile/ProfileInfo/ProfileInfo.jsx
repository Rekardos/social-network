import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Box} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { ProfileStatus} from "./ProfileStatus";


class ProfileInfo extends React.Component{


render() {
    if (!this.props.profile) {
        return <CircularProgress/>
    }
    return <Box>
        <img src={this.props.profile.photos.large} alt=""/>
        <Typography variant={'h3'}>{this.props.profile.fullName}</Typography>
        <ProfileStatus setStatus={this.props.setStatus} profileStatus={this.props.profileStatus}/>
    </Box>
}



}

export default ProfileInfo;
