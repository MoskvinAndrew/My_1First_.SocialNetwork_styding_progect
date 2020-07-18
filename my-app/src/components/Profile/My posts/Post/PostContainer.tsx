import React from "react";
import C from "../MyPosts.module.css";
import {onLikeActionCreator} from "../../../../Redux/profile-reduser";
import Post from "./Post";
import {StoreReduxType} from "../../../../Redux/redux-store";




type PostContainerType = {
    message: string | number,
    likes: number,
    id:string,
    dispatch:(action:any)=>void,
    store: StoreReduxType,




}


function PostContainer(props:PostContainerType) {

    const onLike =(id:string)=>{
        props.dispatch(onLikeActionCreator(id));
    }
    return (<div className={C.item}>
        <Post        message={props.message}
                     likes={props.likes}
                     id={props.id}
                      onLike={onLike}/>
    </div>)
}

export default PostContainer;