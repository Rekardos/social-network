import * as React from "react";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {API} from "../../api/api";

let Users = (props) => {


    let pageCount = Math.ceil(props.totalUsers / props.pageSize);


    const useStyles = makeStyles({
        root: {
            display: 'inline',
            minWidth: 275
        }

    });

    const classes = useStyles();

    let users = props.users.map(e =>

        <Card className={classes.root} key={e.id}>
            <CardContent>
                <NavLink to={'/profile/' + e.id}>
                    <Avatar src={e.photos.small} alt="avatar"/>
                </NavLink>
                <Typography>Никнейм: {e.name}</Typography>

                <Typography>Статус: {e.status ? e.status : 'не указан'}</Typography>

                <CardActions>
                    {e.followed ?
                        <Button disabled={props.followInProgress.some(id => id === e.id)} onClick={() => {

                            props.togglefollowInProgress(true,e.id)
                            API.unfollow(e.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.unfollow(e.id)
                                    }
                                    props.togglefollowInProgress(false,e.id)
                                })

                        }}> Отписаться</Button> :
                        <Button disabled={props.followInProgress.some(id => id === e.id)} onClick={() => {

                            props.togglefollowInProgress(true,e.id)
                            API.follow(e.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.follow(e.id)
                                    }
                                    props.togglefollowInProgress(false,e.id)
                                })


                        }}> Подписаться</Button>}
                </CardActions>

            </CardContent>
        </Card>);


    return <div>

        {props.isFetching ? <CircularProgress/> : null}

        {users}

        <Pagination onChange={(obj, page) => {
            props.pageNumber(page)
        }} count={pageCount}/>

    </div>


};

export default Users;
