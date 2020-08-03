import {v1} from "uuid";
import {usersPageType} from "./Store";
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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
type ActionsType = followACType | unfollowACType | setUsersACType


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
let initialState = {users: []}

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
            return {...copyState,users:[...copyState.users,...action.users]}






        default:
            return state;

    }
}


export const followAC = (userID: string): followACType => ({type: 'FOLLOW', userID});
export const unfollowAC = (userID: string): unfollowACType => ({type: 'UNFOLLOW', userID});
export const setUsersAC = (users: any): setUsersACType => ({type: 'SET_USERS', users});

export default usersReducer;

// let copyState = {...state};
// if (action.type == 'SET_USERS' ) {
//     return   {...copyState,users:[...copyState.users,...action.users]}
//
// }