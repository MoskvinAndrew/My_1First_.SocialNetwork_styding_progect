import React from "react";
import C from "../MyPosts.module.css";
import {
    addNewPostActionCreator,
    newTextAreaValueActionCreator,
    onLikeActionCreator
} from "../../../../Redux/profile-reduser";
import Post from "./Post";
import {RootState} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "../MyPosts";





type PostContainerType = {
    message: string | number,
    likes: number,
    id:string,
    onOnLikeActionCreator:(id:string)=>void,
}

function PostContainer(props:PostContainerType) {

    const onLike =(id:string)=>{
        props.onOnLikeActionCreator(id);
    }
    return (<div className={C.item}>
        <Post        message={props.message}
                     likes={props.likes}
                     id={props.id}
                      onLike={onLike}/>
    </div>)
}


export default PostContainer;
