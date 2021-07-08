import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {getUserStatusTC, saveAvatarTC,actions, getUserProfileTC} from "../../Redux/profile_reducer_test_selectors/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {recivedUserId, status, userProfile} from "../../Redux/profile_reducer_test_selectors/profile-selectors";
import {userProfileType} from "../../types/typesOfReducersState";


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
            // if(!userId){
            //    this.props.match.params('/login')
            // }

        }
        if(!userId){
            console.log('ID should exist in URI params or in state')
        }else {
            this.props.getUserProfileTC(userId);
            this.props.getUserStatusTC(userId);

        }}




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

export default compose(connect(mapStateToProps, {setUserProfile:actions.setUserProfile, setCurrentUserStatus:actions.setCurrentUserStatus, getUserStatusTC,saveAvatarTC,getUserProfileTC})
    , withAuthRedirect
    , withRouter
)
(ProfileContainer) as React.ComponentType
