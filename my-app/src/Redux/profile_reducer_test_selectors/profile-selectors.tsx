import React from 'react';
import {RootState} from "../redux-store";



export const userProfile = (state: RootState) => {
        return state.profilePage.userProfile
    };
export const status = (state: RootState) => {
    return state.profilePage.currentUserStatus
}
export const recivedUserId = (state: RootState) => {
    return state.auth.data.id
}