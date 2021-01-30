import {usersAPI} from "../api/api";
import {Action, Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objects-helper";
import {usersDataType} from "../types/typesOfReducersState";
import {ThunkAction} from "redux-thunk";
import {InferActionsType, RootState} from "./redux-store";

// const FOLLOW = 'usersReducer/FOLLOW'
// const UNFOLLOW = 'usersReducer/UNFOLLOW'
// const SET_USERS = 'usersReducer/SET_USERS'
// const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE'
// const SET_TOTAL_USER_COUNT = 'usersReducer/SET_TOTAL_USER_COUNT'
// const IS_FETCHING_LOADER = 'usersReducer/IS_FETCHING_LOADER'
// const TOGGLE_IS_FOLLOVING_PROGRESS = 'usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS'







export type initialStateType = typeof initialState


let initialState = {
    users: [] as Array<usersDataType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disableButtons: [] as Array<number>, //array of users id`s
}

const usersReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };

        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userID) {
                //         return {...u, followed: false}           //рефакторинг из видео 90
                //     }
                //     return u
                // })
            };


        case "SET_USERS":
            let copyState = {...state}
            return {...copyState, users: action.users}

        case 'SET_TOTAL_USER_COUNT': {
            let copyState = {...state}
            return {...copyState, totalUsersCount: action.totalUsersCount}
        }

        case 'SET_CURRENT_PAGE': {
            debugger
            let copyState = {...state}
            return {...copyState, currentPage: action.currentPage}
        }

        case 'IS_FETCHING_LOADER': {
            let copyState = {...state}
            return {...copyState, isFetching: action.isFetching}
        }

        case 'TOGGLE_IS_FOLLOVING_PROGRESS': {

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

type ActionsType = InferActionsType<typeof actions>

export let actions = {
     followAC:  (userID: number) => ({type: 'FOLLOW', userID} as const),
     unfollowAC:  (userID: number) => ({type: 'UNFOLLOW', userID} as const),
     setUsersAC:  (users: Array<usersDataType>) => ({type: 'SET_USERS', users} as const),
     totalUsersCountAC:  (totalUsersCount: number) => ({
        type: 'SET_TOTAL_USER_COUNT',
        totalUsersCount
    } as const),
     setCurrentPageAC: (currentPage: number) =>  ({  type: 'SET_CURRENT_PAGE', currentPage} as const),
     setIsFetchingAC:  (isFetching: boolean) => ({type: 'IS_FETCHING_LOADER', isFetching} as const),
     setTogleFollowingProgressAC:  (isFetching: boolean, id: number) => ({
        type: 'TOGGLE_IS_FOLLOVING_PROGRESS',
        isFetching,
        id
    } as const)
}




const _followUnfollowFlow = async (userId: number, dispatch: Dispatch, apiMethod: any, actionCreator: (userId: number) =>
    ActionsType) => {
    dispatch(actions.setTogleFollowingProgressAC(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {                                //общая функция для follow/unfollow
        dispatch(actionCreator(userId));
    }

    dispatch(actions.setTogleFollowingProgressAC(false, userId));
}

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, ActionsType>            //общий тип для санок, по рекомендации redux/TS

export const getUsersTC = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.setIsFetchingAC(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setUsersAC(data.items));
        dispatch(actions.setIsFetchingAC(false));
        dispatch(actions.totalUsersCountAC(data.totalCount))
    }
}


export const UnFollowTC = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersAPI.Unfollow.bind(userId);
        _followUnfollowFlow(userId, dispatch, apiMethod, actions.unfollowAC);
    }
}
export const FollowTC = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersAPI.Follow.bind(userId);
        let action = actions.followAC;
        _followUnfollowFlow(userId, dispatch, apiMethod, action);
        //     dispatch(setTogleFollowingProgres(true,userId));
        //     let response = await apiMethod(userId);
        //   if (response.data.resultCode === 0) {                          //рефакторинг из видео 90
        //             dispatch(actionCreator);
        //   }
        //             dispatch(setTogleFollowingProgres(false,userId));
    }
};


export default usersReducer;

