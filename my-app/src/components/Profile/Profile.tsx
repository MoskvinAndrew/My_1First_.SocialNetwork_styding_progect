import React from "react";
import P from './Profile.module.css'
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {indexT} from "../../index";

type ProfileT = {
    postsData: Array<indexT>
};

function Profile(props: ProfileT) {
    return (

        <div className={P.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>

        </div>
    )
};
export default Profile;