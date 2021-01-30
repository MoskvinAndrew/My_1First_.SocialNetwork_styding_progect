import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    actions,

    FollowTC, getUsersTC,

    UnFollowTC,

} from "../../Redux/users-reducer";
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


const UsersContainer = connect(mapStateToProps, {setCurrentPageAC:actions.setCurrentPageAC,UnFollowTC, getUsersTC, FollowTC}
)(UsersApiContain)
export default UsersContainer