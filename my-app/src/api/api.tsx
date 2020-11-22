import axios from "axios";

const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '3347bf31-3166-40e9-8133-7ba22364d70d'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;

            });
    },
    Unfollow(id: number) {
        return instanse.delete(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    Follow(id: number) {
        return instanse.post(`follow/${id}`)
            .then(response => {
                return response
            })
    },
    UserProfileSet(userId: number) {
        console.error('Obsolete method, use Profile API')
        return ProfileAPI.userIdProfile(userId)
    }


};
export const AuthAPI = {
    me() {
        return instanse.get(`auth/me`)
            .then(response => {
                return response.data;

            })
    },
    login(email:string,password:string,rememberMe:boolean) {
        const promise = instanse.post<ResponseType>(`auth/login`,{email,password,rememberMe})
        return promise
    },
    logOut( ) {
  const promise = instanse.delete<ResponseType>(`auth/login`)
        return promise
    }
};
export const ProfileAPI = {

    userIdProfile(userId:number){
        return instanse.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    statusGet(userId:number) {
        const promise = instanse.get(`profile/status/` + userId);
          return promise;
      },
    statusPut(userCurrentStatus:string) {
        const promise = instanse.put(`profile/status/`, {status:userCurrentStatus});
        return promise;
    },

};

export type loginParamsType = {
    email:string,
    password:string,
    rememberMe:boolean,
    captcha?:boolean
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
