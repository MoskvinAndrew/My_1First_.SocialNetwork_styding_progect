import React from "react";
import P from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {userProfileType} from "../../Redux/Store";



type ProfileType = {
    userProfile:userProfileType|null
    status:string

};

function Profile(props:ProfileType) {
    return (

        <div style={{width: '100%'}}>
            <ProfileInfo userProfile={props.userProfile} status={props.status}/>
            <MyPostsContainer/>

        </div>
    )
};
export default Profile;