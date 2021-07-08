import {ProfileDataFormValuesType} from "../components/Profile/ProfileInfo/ProfileEditForm/ProfileForm";
import {instanse} from "./api";
import {photosType, userProfileType} from "../types/typesOfReducersState";
import {APIResponseType} from "./../types/typesForAuthAxiosResponse"

export const ProfileAPI = {

    userIdProfile(userId: number) {
        return instanse.get<userProfileType>(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    statusGet(userId: number) {
        return instanse.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    statusPut(userCurrentStatus: string) {
        return instanse.put<APIResponseType>(`profile/status/`, {status: userCurrentStatus})
            .then(response => {
                return response.data
            })
    },
    setAvatar(photoFile: File) {
        let formData = new FormData();
        formData.append("image", photoFile)

        return instanse.put<APIResponseType<photosType>>(`/profile/photo/`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            })

    },
    updateUserInformation(values: ProfileDataFormValuesType) {
        return instanse.put<APIResponseType>(`/profile`, values)
            .then(response => {
                return response.data
            })

    }

};
