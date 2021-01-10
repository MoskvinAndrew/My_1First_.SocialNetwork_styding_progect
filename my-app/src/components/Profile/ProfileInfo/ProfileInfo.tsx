import React, {useEffect, useState} from "react";
import K from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/preloader";
import {userProfileType} from "../../../Redux/Store";
import UserProfileStatus from "./UserStatus/UserProfileStatus";
import PhotoElement from "./PhotoComponent/PhotoElement";
import ProfileDataForm from "./ProfileEditForm/ProfileForm";


type ProfileInfoType = {
    userProfile: userProfileType | null
    status: string,
    isOwner: boolean,
    saveAvatar: (photoFile: any) => void,
}
let ProfileInfo = (props: ProfileInfoType) => {
    let [editMode, setEditMode] = useState<boolean>(false);



    if (!props.userProfile) {
        return <Preloader/>
    }

    const goToEditMode = () => {
        setEditMode(true);
    }


    return (
        <div className={K.mainWrapper}>
            {editMode ? <ProfileDataForm userProfile={props.userProfile}
                                         isOwner={props.isOwner}
                                         setEditMode={setEditMode}/> :

                         <ProfileData userProfile={props.userProfile}
                                      isOwner={props.isOwner}
                                      goToEditMode={goToEditMode}/>}


        </div>
    )
}
const ProfileData = (props: { userProfile: userProfileType, isOwner: boolean, goToEditMode: any }) => {

    const Contacts = ({contactTitle, contactValue}: any) => {
        return (
            <div> {contactTitle}:{contactValue}</div>
        )
    };

    return <div className={K.profileDataContentWrapper}>
        <div className={K.statusEditButtonChooseFileButton}>
        {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
        <div>
            <UserProfileStatus/>
        </div>
        <div >
            <PhotoElement isOwner={props.isOwner}/>
        </div>
        </div>


        <div className={K.profileUserData}>
            <div>
            <b>Имя</b>: {props.userProfile.fullName}
        </div>
        <div>
            <b>Обо мне</b>: {props.userProfile.aboutMe}
        </div>
        <div>
            <b>Looking For a job:</b>{props.userProfile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>My professional skills:</b>{props.userProfile.lookingForAJobDescription}
        </div>
        </div>
        <div className={K.contactsList}>
            <b>Contacts:</b>{Object.keys(props.userProfile.contacts).map(el => {


            // @ts-ignore
            return <Contacts key={el} contactTitle={el} contactValue={props.userProfile.contacts.el}/>
        })}
        </div>


    </div>
};




export default ProfileInfo;