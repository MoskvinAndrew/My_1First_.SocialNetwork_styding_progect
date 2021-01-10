import React from "react";
import P from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {userProfileType} from "../../Redux/Store";
import backGround from"../../assets/light-aircraft-pilot-course-spain.jpg"


type ProfileType = {
    userProfile: userProfileType | null,
    status: string,
    isOwner:boolean,
    saveAvatar:(photoFile:any)=>void,



};

function Profile(props: ProfileType) {

    return (
        <div>
            <div className={P.wrapper}>

                <div className={P.ProfileInfo}>
                    <div className={P.infoComponent}><ProfileInfo userProfile={props.userProfile}
                                                                  status={props.status}
                                                                  isOwner={props.isOwner}
                                                                  saveAvatar={props.saveAvatar}

                    />
                    </div>
                    <img src={backGround}/>
                </div>
                <MyPostsContainer/>

            </div>
        </div>

    )
};
export default Profile;