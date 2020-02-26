import React from "react";
import c from './AddPost.module.css';
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const AddPost = (props) => {

    let refPost = React.createRef();

    let addPost = () => {
        props.addPost(refPost.current.value);
    };

    let textOnChange = () => {
        props.updateText(refPost.current.value);
    };

    return (
        <Box className={c.addPost}>
            <div>
                <TextField value={props.profilePage.newPostText} onChange={textOnChange} multiline={true} variant="outlined" inputRef={refPost}/>
            </div>
            <div>
                <Button onClick={addPost}>Добавить</Button>
            </div>
        </Box>
    );
};

export default AddPost;
