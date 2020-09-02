import axios from "axios";

const instanse = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{
        'API-KEY':'3347bf31-3166-40e9-8133-7ba22364d70d'}});

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data});
    },
    Unfollow(id:number){
        return instanse.delete(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    Follow(id:number){
        return instanse.post(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    AuthMe(){
   return instanse.get(`auth/me`)
        .then(response => {

            return  response.data;

        })
    },
UsersProfileSet(userId:number){
   return instanse.get(`profile/`+ userId)
        .then(response => {
           return response.data;
        })}


}

