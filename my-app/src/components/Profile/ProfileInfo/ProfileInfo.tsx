import React from "react";
import K from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/preloader";

type ProfileInfoType = {
    userProfile:any
}
let ProfileInfo = React.memo((props:ProfileInfoType)=> {
    if(!props.userProfile){
        return <Preloader/>
    }

    return(
        <div>
        <div>
        <img className={K.firstImg} src='https://www.eurocae.net/media/1054/header-2-homepage.png'/>
    </div>
    <div className={K.descriptionBlock}>
        <img src={props.userProfile.photos.large&&props.userProfile.photos.large}/>
        {/*ava+description*/}<div>{props.userProfile.fullName}</div>
        <p>{props.userProfile.aboutMe}</p>

    </div>
        </div>
    )})
export default ProfileInfo;