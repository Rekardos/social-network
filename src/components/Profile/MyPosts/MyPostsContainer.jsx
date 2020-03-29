import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, newPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store)=>{

                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let textOnChange = (body) => {
                        store.dispatch(newPostTextActionCreator(body));
                    };

                    return <MyPosts newPostText={state.profilePage.newPostText}
                             posts={state.profilePage.posts}
                             addPost={addPost}
                             textOnChange={textOnChange}/>
                }
            }


        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
