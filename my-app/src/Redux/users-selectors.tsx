 import React from 'react';
import {RootState} from "./redux-store";
 import {createSelector} from "reselect";

export const getUsersPage = (state:RootState) => {
    return state.UsersPage.users
};

export const getSuperUserPage = createSelector([getUsersPage],(users)=>users.length)

export const getPageSize = (state:RootState) => {
    return state.UsersPage.pageSize
};
export const getTotalUsersCount = (state:RootState) => {
    return state.UsersPage.totalUsersCount
};
export const getCurrentPage = (state:RootState) => {
    return state.UsersPage.currentPage
};
export const getIsFetching = (state:RootState) => {
    return state.UsersPage.isFetching
};
export const getDisableButtons = (state:RootState) => {
    return state.UsersPage.disableButtons
}