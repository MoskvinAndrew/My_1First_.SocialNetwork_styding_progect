import React from 'react';
import {connect} from "react-redux";

import {RootState} from "../../Redux/redux-store";
import {followAC, setCurrentPageAC, setUsersAC, totalUsersCountAC, unfollowAC} from "../../Redux/users-reduser";
import Users from "./UserWithClassComponent";





let mapStateToProps = (state: RootState) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,

    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        onFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        onUnFollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        onSetUsersAC: (users: any) => {
            dispatch(setUsersAC(users))
        },
        onTotalUsersCountAC:(totalUsersCount:number)=>{
            dispatch(totalUsersCountAC(totalUsersCount))
        },
        onSetCurrentPageAC:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        }




    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;