import React from 'react';
import {usersDataType, usersPageType} from "../../Redux/Store";
import S from './Users.module.css'
import * as axios from 'axios';
import {v1} from "uuid";

type UsersTypes = {
    users: Array<usersDataType>,
    onFollow: (userID: string) => void,
    onUnFollow: (userID: string) => void,
    onSetUsersAC: (users: any) => void

}

type responseType = {


}

let Users = (props:UsersTypes) => {


    if (props.users.length === 0) {

        // @ts-ignore
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then((response:any)=>{
        props.onSetUsersAC(response.data.items)})

    }

    return <div>
        <button onClick={() => {
        }}>Добавить пользователей
        </button>
        {props.users.map((u:any) => <div key={u.id}><span> <div> <img src={u.photoUrl} className={S.userPhoto}/> </div>
                                                   <div>
                                                       {u.followed ? <button
                                                               onClick={() => props.onFollow(u.id)}>Follow</button> :
                                                           <button
                                                               onClick={() => props.onUnFollow(u.id)}>Unfollow</button>}

                                                   </div>
        </span>
            <span>
            <span><div>{u.name}</div><div>{u.status}</div>
            </span>
            <span><div>{'u.location.city'}</div><div>{'u.location.country'}</div>
            </span>
        </span>
        </div>)
        }

    </div>

}

export default Users;