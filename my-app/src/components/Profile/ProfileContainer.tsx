import React from "react";
import P from "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {getUserStatusTC, setCurrentUserStatus, setUserProfile} from "../../Redux/profile-reduser";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {userProfileType} from "../../Redux/Store";
import {resivedUserId, status, userProfile} from "../../Redux/profile-selectors";


type ProfileContainerType = {
    setUserProfile: (userProfile: any) => void,
    userProfile: userProfileType | null
    match: {
        params: { userId: number },
        path: string,
        url: string,
        isExact: boolean
    }
    status: string
    setCurrentUserStatus: (userStatus: string) => void
    getUserStatusTC: (userId: number) => void
    resivedUserId: number


}


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.resivedUserId;
        }
        usersAPI.UserProfileSet(userId)
            .then((data: any) => {
                this.props.setUserProfile(data);
            });
        this.props.getUserStatusTC(userId)

    };


    render() {

        return (
            <div className={P.content}>
                <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: RootState) => ({

    userProfile: userProfile(state),
    status: status(state),
    resivedUserId: resivedUserId(state)


})

export default compose(connect(mapStateToProps, {setUserProfile, setCurrentUserStatus, getUserStatusTC})
    , withAuthRedirect
    , withRouter
)
(ProfileContainer) as React.ComponentType
