import React from "react";
import P from "./Profile.module.css";
import Profile from "./Profile";
import  axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {setUserProfile} from "../../Redux/profile-reduser";
import { withRouter } from "react-router-dom";
import {usersAPI} from "../../api/api";


type ProfileContainerType={
    setUserProfile:(userProfile:any)=>void,
    userProfile:any
    match:any

}

class ProfileContainer extends React.Component<ProfileContainerType>{

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId){
            userId=2;
        }
        console.log(userId)

        usersAPI.UsersProfileSet(userId)
            .then((data: any) => {
                this.props.setUserProfile(data);

                })
    }

    render(){

        return(
        <div className={P.content}>
            <Profile userProfile={this.props.userProfile}
               />
        </div>

        )
    }
}
let mapStateToProps = (state:RootState) =>({
    userProfile:state.profilePage.userProfile,
})

// let ComponentWitchReadURL = withRouter(ProfileContainer);
export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer)) ;