import React from "react";
import C from "./MyPosts.module.css";
import {addNewPostActionCreator, newTextAreaValueActionCreator} from "../../../Redux/profile-reduser";
import {StoreReduxType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";

export type MypostsType = {
    store: StoreReduxType,
    dispatch:(action:any)=>void,

};

function MyPostsContainer (props: MypostsType) {


 let newPost = props.store.getState().profileReducer.newPostText

    let onAddNewPost = ()=>{
        props.dispatch(addNewPostActionCreator());
    }

    let onNewTextAreaValue =(textNew:string)=>{
        props.dispatch(newTextAreaValueActionCreator(textNew));
    }


    return (

        <div className={C.postBlock}>
           <MyPosts postsData={props.store.getState().profileReducer.postsData}
                    dispatch={props.dispatch}
                    onAddNewPost={onAddNewPost}
                    onNewTextAreaValue={onNewTextAreaValue}
                    newPost={newPost}
                    store={props.store}/>


        </div>
    )

};
export default MyPostsContainer;