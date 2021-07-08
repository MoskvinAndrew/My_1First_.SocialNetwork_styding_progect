import axios from "axios";

export const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'a4ccc59a-b0d7-4cb8-b389-cc3b34f67e84'
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
};
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data;
//
//
//             });
//     },
//     Unfollow(id: number) {
//         return instanse.delete(`follow/${id}`)
//             .then(response => {
//                 return response
//             })
//     },
//     Follow(id: number) {
//         return instanse.post(`follow/${id}`)
//             .then(response => {
//                 return response
//             })
//     },
//
// };

// export const AuthAPI = {
//     me() {
//         return instanse.get<MeResponseType>(`auth/me`)
//             .then(response => {
//                 return response.data;
//             })},
//     login(email:string,password:string,rememberMe:boolean,captcha:string|null = null ) {
//         return instanse.post<loginPOSTResponseType>(`auth/login`,{email,password,rememberMe,captcha})
//             .then(response => {
//                 return response;
//             })
//     },
//     logOut( ) {
//   return instanse.delete(`auth/login`)
//         .then(response => {
//                 return response;
//             })}
// };

// export const ProfileAPI = {
//
//     userIdProfile(userId:number){
//         return instanse.get(`profile/` + userId)
//             .then(response => {
//                 return response.data
//             })
//     },
//     statusGet(userId:number) {
//         const promise = instanse.get(`profile/status/` + userId);
//           return promise;
//       },
//     statusPut(userCurrentStatus:string) {
//         console.log("statusPutOn")
//         const promise = instanse.put(`profile/status/`, {status:userCurrentStatus});
//         return promise;
//     },
//     setAvatar(photoFile:any) {
//         let formData = new FormData();
//         formData.append("image",photoFile)
//
//         const promise = instanse.put( `/profile/photo/`,formData,{headers:{
//             "Content-Type": 'multipart/form-data'
//             }});
//         return promise
//     },
//     updateUserInformation(values:ProfileDataFormValuesType) {
//         const promise = instanse.put(`/profile`,values);
//         return promise
//
//     }
//
// };

// export const securityAPI = {
//     getCaptchaURL(){
//         const promise = instanse.get(`/security/get-captcha-url`);
//         return promise;
//     }
// }



