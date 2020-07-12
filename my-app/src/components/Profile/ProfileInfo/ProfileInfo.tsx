import React from "react";
import K from './ProfileInfo.module.css'



function ProfileInfo() {
    return(
        <div  >
        <div>
        <img className={K.firstImg} src='https://www.eurocae.net/media/1054/header-2-homepage.png'/>
    </div>
    <div className={K.descriptionBlock}>
        ava+description
    </div>
        </div>
    )}
export default ProfileInfo;