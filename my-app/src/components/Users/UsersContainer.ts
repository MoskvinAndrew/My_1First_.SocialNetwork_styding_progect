import React from 'react';
import {connect} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
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
        isFetching: state.UsersPage.isFetching

    }
}
//let mapDispatchToProps = (dispatch: any) => {
//     return {
//         onFollow: (userID: string) => {
//             dispatch(followAC(userID))
//         },
//         onUnFollow: (userID: string) => {
//             dispatch(unfollowAC(userID))
//         },
//         onSetUsersAC: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         onTotalUsersCountAC: (totalUsersCount: number) => {
//             dispatch(totalUsersCountAC(totalUsersCount))
//         },
//         onSetCurrentPageAC: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//
//         onSetIsFetchingAC: (isFetching:boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//
//
//
//     }
// }
//

const UsersContainer = connect(mapStateToProps,{follow:followAC, unfollow:unfollowAC,
    setUsers:setUsersAC,
    totalUsersCountac:totalUsersCountAC,
    setCurrentPage:setCurrentPageAC,
    setIsFetching:setIsFetchingAC})(UsersApiContain)
export default UsersContainer