import React from "react";
import P from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreReduxType} from "../../Redux/redux-store";
import MyPostsContainer from "./My posts/MyPostsContainer";
import PostContainer from "./My posts/Post/PostContainer";



type ProfileType = {
    dispatch:(action:any)=>void,
};

function Profile(props:ProfileType) {


    return (

        <div className={P.content}>
            <ProfileInfo/>
            <MyPostsContainer  dispatch={props.dispatch}/>

        </div>
    )
};
export default Profile;