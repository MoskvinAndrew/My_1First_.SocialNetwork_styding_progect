import style from "./ProfileForm.module.css";
import React, {useEffect} from "react";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {FormLabel, TextField, FormGroup, FormControlLabel, Checkbox} from "@material-ui/core";
import {updateProfileInformationTC, } from "../../../../Redux/profile-reducer";
import {userProfileType} from "../../../../types/typesOfReducersState";


type ProfileDataFormType = {
    userProfile: userProfileType,
    isOwner: boolean,
    setEditMode:(EditMode:boolean)=>void;

}
export type ProfileDataFormValuesType = {
    fullName: string|null,
    aboutMe: string|null,
    lookingForAJobDescription:string|null,
    lookingForAJob: boolean,
    contacts:{
        facebook:string|null,
        github: string|null,
        instagram: string|null,
        mainLink: string|null,
        twitter: string|null,
        vk: string|null,
        website: string|null,
        youtube: string|null
    }

}

const ProfileDataForm = (props: ProfileDataFormType) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        // validate: (values) => {
        //     if (!values.email) return {email: "email is required"};
        //     if (!values.email.split("").includes('@')) return {email: "enter correct email"};
        //     if (!values.password)
        //         return {password: "password is required"}
        //
        //
        // },
        initialValues: {
            fullName: props.userProfile.fullName,
            aboutMe: props.userProfile.aboutMe,
            lookingForAJob: false,
            lookingForAJobDescription: props.userProfile.lookingForAJobDescription,
            contacts:{
                facebook:props.userProfile.contacts.facebook,
                github: props.userProfile.contacts.github,
                instagram: props.userProfile.contacts.instagram,
                mainLink: props.userProfile.contacts.mainLink,
                twitter: props.userProfile.contacts.twitter,
                vk: props.userProfile.contacts.vk,
                website: props.userProfile.contacts.website,
                youtube: props.userProfile.contacts.youtube

            }
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)
             dispatch(updateProfileInformationTC(values,props.userProfile.userId));
           setTimeout(()=>props.setEditMode(false),1000);             // костыль из-за ошибки в консоли memoryLeak



            resetForm({
                values: {
                    fullName: '', aboutMe: '', lookingForAJob: false, lookingForAJobDescription: '',
                    contacts:{
                        facebook:'',
                        github: '',
                        instagram: '',
                        mainLink: '',
                        twitter: '',
                        vk: '',
                        website: '',
                        youtube: ''
                    }
                }
            })
            values = {
                fullName: '',
                aboutMe: '',
                lookingForAJob: false,
                lookingForAJobDescription: '',
                contacts:{
                    facebook:'',
                    github: '',
                    instagram: '',
                    mainLink: '',
                    twitter: '',
                    vk: '',
                    website: '',
                    youtube: ''
                }
            }
        }
    })


    const Contacts = ({contactTitle, contactValue}: any) => {
        return (

            <div> {contactTitle}:
                {contactValue}
            </div>

        )
    };

    return (
        <form onSubmit={formik.handleSubmit} >

            <div className={style.profileDataContentWrapper}>

                <div className={style.statusEditButtonChooseFileButton}>
                    <button type={'submit'}>SAVE</button>
                </div>


                <div className={style.profileUserData}>
                    <FormGroup>
                        <div>

                            <FormLabel>
                                <b>Имя:</b>
                            </FormLabel> <TextField
                                              size="medium"
                                              type="fullName"
                                              label="fullName"
                            {...formik.getFieldProps('fullName')}/>
                        </div>


                        <div>
                            <FormLabel>
                                <b>Обо мне:</b>
                            </FormLabel>
                            <TextField
                                size="medium"
                                type="aboutMe"
                                label="aboutMe"
                            {...formik.getFieldProps('aboutMe')}/>
                        </div>


                        <div>
                            <FormLabel>
                                <b>Мои навыки:</b>
                            </FormLabel>
                            <TextField
                                size="medium"
                                type= "textfield"
                                label="lookingForAJobDescription"
                                {...formik.getFieldProps('lookingForAJobDescription')}/>
                        </div>

                        <div>
                            <FormControlLabel
                                label={'lookingForAJob'}
                                control={<Checkbox
                                    {...formik.getFieldProps('lookingForAJob')}

                                />}/>
                        </div>
                    </FormGroup>
                </div>
                <div className={style.contactsList}>
                    <b>Contacts:</b>{Object.keys(props.userProfile.contacts).map(key => {

                    // @ts-ignore
                    return <form ><div key={key} className={style.contactsEdit}>
                        <b>{key}:{<TextField  {...formik.getFieldProps(`contacts.${key}`)}/>}</b>
                    </div></form>

                })}
                </div>


            </div>
        </form>
    )
};


export default ProfileDataForm;

// <Contacts key={key} contactTitle={key} contactValue={props.userProfile.contacts.key}/>