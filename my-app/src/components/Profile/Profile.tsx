import React from "react";
import P from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";



type ProfileType = {
    userProfile:any
};

function Profile(props:ProfileType) {
    return (

        <div className={P.content}>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>

        </div>
    )
};
export default Profile;