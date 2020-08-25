import {v1} from "uuid";
import {usersPageType} from "./Store";
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const IS_FETCHING_LOADER = 'IS_FETCHING_LOADER'

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
    type:typeof SET_TOTAL_USER_COUNT,
    totalUsersCount:number
}
export type setCurrentPageACType = {
    type:typeof SET_CURRENT_PAGE
    currentPage:number
}
export type setIsFetchingACType = {
    type: typeof IS_FETCHING_LOADER,
    isFetching:boolean
}
type ActionsType = followACType | unfollowACType | setUsersACType| totalUsersCountACType|setCurrentPageACType|setIsFetchingACType


// let initialState:usersPageType = {
//     users: [
//         {
//             id: v1(),
//             followed: true,
//             photoUrl: 'https://www.urbanus.ru/storage/public/persons/477/zjD5iS2ftGCPxFXQKZjjNMGUp8i5gbEdLzvKyr6h.png',
//             fullName: 'Jan Pol Belmondo',
//             status: 12,
//             location: {country: "Ukraine", city: "Simferopol"}
//         },
//         {
//             id: v1(),
//             followed: false,
//             photoUrl: 'https://www.urbanus.ru/storage/public/persons/477/zjD5iS2ftGCPxFXQKZjjNMGUp8i5gbEdLzvKyr6h.png',
//             fullName: 'Dmitrii Kuzuberdin',
//             status: "looking for a summer",
//             location: {country: "Belarusia", city: "Gomel"}
//         },
//         {
//             id: v1(),
//             followed: true,
//             photoUrl: 'https://www.urbanus.ru/storage/public/persons/477/zjD5iS2ftGCPxFXQKZjjNMGUp8i5gbEdLzvKyr6h.png',
//             fullName: 'Moskvin Andrew',
//             status: "waiting...",
//             location: {country: "USA", city: "Orlando"}
//         },
//         {
//             id: v1(),
//             followed: false,
//             photoUrl: 'https://www.urbanus.ru/storage/public/persons/477/zjD5iS2ftGCPxFXQKZjjNMGUp8i5gbEdLzvKyr6h.png',
//             fullName: 'Serega',
//             status: "zalupca",
//             location: {country: "Canada", city: "Calgary"}
//         },
//
//
//     ]
// }
let initialState = {users: [],
    pageSize:10,
    totalUsersCount:100,
    currentPage:1,
    isFetching:false,
}

const usersReducer = (state:usersPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return{
            ...state,
            users:state.users.map(u => {
                if (action.userID === u.id ) {
                    return {...u, followed: false}
                }
                return u
            })};

        case UNFOLLOW:
            return{
                ...state,
            users:state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed:true}
                }
                return u
            })};



        case SET_USERS:
            let copyState={...state}

            return {...copyState,users:action.users}

        case SET_TOTAL_USER_COUNT:{
            let copyState={...state}

            return {...copyState,totalUsersCount:action.totalUsersCount}}

        case SET_CURRENT_PAGE: {
            let copyState = {...state}
                 return{...copyState,currentPage:action.currentPage}}

        case IS_FETCHING_LOADER:{
                let copyState = {...state}

                return {...copyState, isFetching: action.isFetching}}




        default:
            return state;

    }
}


export const followAC = (userID: string): followACType => ({type: 'FOLLOW', userID});
export const unfollowAC = (userID: string): unfollowACType => ({type: 'UNFOLLOW', userID});
export const setUsersAC = (users: any): setUsersACType => ({type: 'SET_USERS', users});
export const totalUsersCountAC = (totalUsersCount: number): totalUsersCountACType => ({type: 'SET_TOTAL_USER_COUNT', totalUsersCount});
export const setCurrentPageAC = (currentPage:number):setCurrentPageACType =>({type:'SET_CURRENT_PAGE',currentPage})
export const setIsFetchingAC = (isFetching:boolean):setIsFetchingACType =>({type:'IS_FETCHING_LOADER',isFetching})

export default usersReducer;

