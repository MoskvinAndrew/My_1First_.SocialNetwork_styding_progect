import {usersPageType} from "./Store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const IS_FETCHING_LOADER = 'IS_FETCHING_LOADER'
const TOGGLE_IS_FOLLOVING_PROGRESS = 'TOGGLE_IS_FOLLOVING_PROGRESS'


export type followACType = {
    type: typeof FOLLOW,
    userID: string,

};
export type unfollowACType = {
    type: typeof UNFOLLOW,
    userID: string,

};
export type setUsersACType = {
    type: typeof SET_USERS,
    users: any
};
export type totalUsersCountACType = {
    type: typeof SET_TOTAL_USER_COUNT,
    totalUsersCount: number
}
export type setCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type setIsFetchingACType = {
    type: typeof IS_FETCHING_LOADER,
    isFetching: boolean
}
export  type setTogleFollowingProgresType = {
    type: typeof TOGGLE_IS_FOLLOVING_PROGRESS,
    isFetching:boolean,
    id: number,

}

type ActionsType =
    followACType
    | unfollowACType
    | setUsersACType
    | totalUsersCountACType
    | setCurrentPageACType
    | setIsFetchingACType
    | setTogleFollowingProgresType



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: false,
    disableButtons: [],
}

const usersReducer = (state: usersPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };


        case SET_USERS:
            let copyState = {...state}

            return {...copyState, users: action.users}

        case SET_TOTAL_USER_COUNT: {
            let copyState = {...state}

            return {...copyState, totalUsersCount: action.totalUsersCount}
        }

        case SET_CURRENT_PAGE: {
            let copyState = {...state}
            return {...copyState, currentPage: action.currentPage}
        }

        case IS_FETCHING_LOADER: {
            let copyState = {...state}

            return {...copyState, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOVING_PROGRESS: {

            let copyState = {...state};
            return {
                ...copyState, disableButtons: action.isFetching ?              /*мой способ с одним колбэком*/
                    [...copyState.disableButtons, action.id] :
                    copyState.disableButtons.filter(id => id !== action.id)
                // []        мой способ просто с пустым массивом
            }
            // ...state,
            // disableButtons: action.isFetching ?
            //     [...state.disableButtons, action.id] :                  способ Димыча
            //     state.disableButtons.filter(id => id !== action.id)

        }


        default:
            return state;

    }
}


export const followAC = (userID: string): followACType => ({type: 'FOLLOW', userID});
export const unfollowAC = (userID: string): unfollowACType => ({type: 'UNFOLLOW', userID});
export const setUsersAC = (users: any): setUsersACType => ({type: 'SET_USERS', users});
export const totalUsersCountAC = (totalUsersCount: number): totalUsersCountACType => ({
    type: 'SET_TOTAL_USER_COUNT',
    totalUsersCount
});
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingACType => ({type: 'IS_FETCHING_LOADER', isFetching})
export const setTogleFollowingProgres = (isFetching:boolean, id: number): setTogleFollowingProgresType => ({type: 'TOGGLE_IS_FOLLOVING_PROGRESS',isFetching, id})
export default usersReducer;

