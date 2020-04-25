import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPost = (props) => {

    return (
            <ReduxPostForm onSubmit={props.onSubmit}/>
    );
};

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'postMessage'} component={'input'}/>
        </div>
        <div>
            <Field component={'button'}>Добавить</Field>
        </div>
    </form>
    }

const ReduxPostForm = reduxForm({form: 'addPost'})(PostForm)

export default AddPost;
