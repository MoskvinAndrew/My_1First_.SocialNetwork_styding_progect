import React from "react";
import K from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/preloader";
import {userProfileType} from "../../../Redux/Store";
import UserProfileStatus from "./UserProfileStatus";

type ProfileInfoType = {
    userProfile:userProfileType|null
    status:string
}
let ProfileInfo = React.memo((props:ProfileInfoType)=> {

    if(!props.userProfile){
        return <Preloader/>
    }
    return(
        <div className={K.mainWrapper}>

        <div>{<UserProfileStatus/>}</div>

    <div className={K.descriptionBlock}>
        <div className={K.imgDiv}><img src={props.userProfile.photos.large&&props.userProfile.photos.large}/></div>
        <div>{props.userProfile.fullName}</div>
        <div><p>{props.userProfile.aboutMe}</p></div>
    </div>

        </div>
    )})
export default ProfileInfo;