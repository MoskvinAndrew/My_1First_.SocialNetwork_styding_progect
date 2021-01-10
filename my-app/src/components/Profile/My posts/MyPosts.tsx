import React from "react";
import C from "./MyPosts.module.css";
import  { postsDataType} from "../../../Redux/Store";
import PostContainer from "./Post/PostContainer";
import {NewPostTextForm} from "./NewPostForm/NewPostForm";




export type MypostsType = {
    postsData: Array<postsDataType>,
    onAddNewPost:(textNew:string)=>void,
    onOnLikeActionCreator:(id:string)=>void

};




let MyPosts = (props: MypostsType) => {

    let newPostData = props.postsData.

    map(p => <PostContainer key={p.id} message={p.message}  likes={p.likes}  id={p.id} onOnLikeActionCreator={props.onOnLikeActionCreator}  />)

    let addNewPost = (values:{newPostText:string})=>{
        props.onAddNewPost(values.newPostText);
    };


    return (

        <div className={C.postBlock}>
            <h3>My posts</h3>
            <div>
                <NewPostTextForm onSubmit={addNewPost} />
            </div>
            {newPostData}

        </div>
    )
};
export default MyPosts;