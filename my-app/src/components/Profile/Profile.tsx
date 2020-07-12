import React from "react";
import P from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../Redux/State";

type ProfileType = {
    postsData: Array<postsDataType>
    dispatch:(action:any)=>void,

};

function Profile(props:ProfileType) {
    return (

        <div className={P.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     dispatch={props.dispatch}

            />

        </div>
    )
};
export default Profile;