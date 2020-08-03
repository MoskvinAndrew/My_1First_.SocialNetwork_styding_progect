import React from 'react';
import {connect} from "react-redux";

import {RootState} from "../../Redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reduser";
import Users from "./Users";




let mapStateToProps = (state:RootState)=>{

        return{
    users:state.UsersPage.users

    }}
let mapDispatchToProps=(dispatch:any)=>{
    return{
        onFollow:(userID:string)=>{dispatch(followAC(userID))},
        onUnFollow:(userID:string)=>{dispatch(unfollowAC(userID))},
        onSetUsersAC:(users:any)=>{dispatch(setUsersAC(users))},


        }}




const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer;