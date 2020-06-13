import React from "react";
import K from './ProfileInfo.module.css'



function ProfileInfo() {
    return(
        <div  >
        <div>
        <img src='https://www.star2star.com/sites/default/files/emerging-technologies-header-image.jpg'/>
    </div>
    <div className={K.descriptionBlock}>
        ava+description
    </div>
        </div>
    )}
export default ProfileInfo;