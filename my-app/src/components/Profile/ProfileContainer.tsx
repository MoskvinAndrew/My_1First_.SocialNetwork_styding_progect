import React from "react";
import P from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {getUserStatusTC, saveAvatarTC, setCurrentUserStatus, setUserProfile, getUserProfileTC} from "../../Redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {ProfileAPI, usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {userProfileType} from "../../Redux/Store";
import {recivedUserId, status, userProfile} from "../../Redux/profile-selectors";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileContainerType = {
    setUserProfile: (userProfile: any) => void,
    userProfile: userProfileType
    match: {
        params: { userId: number },
        path: string,
        url: string,
        isExact: boolean
    }
    status: string
    setCurrentUserStatus: (userStatus: string) => void
    getUserStatusTC: (userId: number) => void
    recivedUserId: number,
    saveAvatar:(photoFile:any)=>void,
    getUserProfileTC:(userId: number)=>void,



}


class ProfileContainer extends React.Component<ProfileContainerType> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.recivedUserId;
        }
         this.props.getUserProfileTC(userId);
        this.props.getUserStatusTC(userId);

        // ProfileAPI.userIdProfile(userId)
        //     .then((data: any) => {
        //         this.props.setUserProfile(data);
        //     });
    }

    componentDidMount() {

        this.refreshProfile()
    };

componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>, snapshot?: any) {

    if(this.props.match.params.userId != prevProps.match.params.userId){
    this.refreshProfile()}

}

    render() {

        return (
            <div>
                <Profile {...this.props}
                         userProfile={this.props.userProfile}
                         status={this.props.status}
                         isOwner={!this.props.match.params.userId}
                         saveAvatar={this.props.saveAvatar}

                />
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => ({
    userProfile: userProfile(state),
    status: status(state),
    recivedUserId: recivedUserId(state),



})

export default compose(connect(mapStateToProps, {setUserProfile, setCurrentUserStatus, getUserStatusTC,saveAvatarTC,getUserProfileTC})
    , withAuthRedirect
    , withRouter
)
(ProfileContainer) as React.ComponentType
