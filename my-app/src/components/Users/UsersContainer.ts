import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    Follow,
    followAC, getUsers,
    setCurrentPageAC,
    setTogleFollowingProgres, UnFollow,
    unfollowAC
} from "../../Redux/users-reduser";
import UsersApiContain from "./UsersApiContainer";


let mapStateToProps = (state: RootState) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        disableButtons:state.UsersPage.disableButtons

    }
}


const UsersContainer = connect(mapStateToProps,
{
    setCurrentPage:setCurrentPageAC,
    UnFollow, getUsers,Follow

}
)(UsersApiContain)
export default UsersContainer