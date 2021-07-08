import {instanse} from "./api";
import {usersDataType} from "../types/typesOfReducersState";

export type GetUsersResponseType = {
    items: Array<usersDataType>,
    totalCount: number,
    error: string
};
export type FollowResponseType = {
    data:object
    resultCode:number
    messages:Array<string>
}


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10,term:string = '',friend:null|boolean = null) {

        return instanse.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`+
            (friend===null?'':`&friend=${friend}`)
        )
            .then(response => {
                return response.data;


            });
    },
    Unfollow(id: number) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data) as Promise<FollowResponseType>
    },
    Follow(id: number) {
        return instanse.post<FollowResponseType>(`follow/${id}`)
            .then(response => response.data)

    },

};
