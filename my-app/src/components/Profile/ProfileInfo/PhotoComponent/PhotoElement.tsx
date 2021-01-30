import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../Redux/redux-store";
import noPhoto from "./../../../../assets/noPhoto.png";
import style from "./PhotoBlock.module.css"
import {saveAvatarTC} from "../../../../Redux/profile-reducer";
import {userProfileType} from "../../../../types/typesOfReducersState";


type PhotoElementType = {
    isOwner:boolean,

}


const PhotoElement  = (props:PhotoElementType) =>{

    let userProfile = useSelector<RootState, userProfileType|null> (state => state.profilePage.userProfile);
    let dispatch = useDispatch();

const photo = () =>{
    if(userProfile?.photos.large === null  ){
        return <img src={noPhoto}/>
    }else{
       return <img src={userProfile?.photos.large}/>
    }
};

   const onChangeHandler = (event: any) =>{


           let avatar = event.target.files[0];
       dispatch(saveAvatarTC(avatar));


   }
    return (
        <div className={style.wrapper}>

            <div className={style.photoBlock}>
                {photo()}
            </div>
            <div className={style.chooseFileButton}>
                {props.isOwner && <input type={'file'} onChange={onChangeHandler}/>}
            </div>

        </div>
    )
}
export default PhotoElement;