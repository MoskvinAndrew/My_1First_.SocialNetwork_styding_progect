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
import {

    getCurrentPage,
    getDisableButtons,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersPage
} from "../../Redux/users-selectors";


let mapStateToProps = (state: RootState) => {
    return {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        disableButtons: getDisableButtons(state)

    }
}


const UsersContainer = connect(mapStateToProps, {setCurrentPage: setCurrentPageAC, UnFollow, getUsers, Follow}
)(UsersApiContain)
export default UsersContainer