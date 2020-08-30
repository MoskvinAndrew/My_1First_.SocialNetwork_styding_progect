import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC, setTogleFollowingProgres,
    setUsersAC,
    totalUsersCountAC,
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


const UsersContainer = connect(mapStateToProps,{follow:followAC, unfollow:unfollowAC,
    setUsers:setUsersAC,
    totalUsersCountAC:totalUsersCountAC,
    setCurrentPage:setCurrentPageAC,
    setIsFetching:setIsFetchingAC,
    setTogleFollowingProgres:setTogleFollowingProgres,

})(UsersApiContain)
export default UsersContainer