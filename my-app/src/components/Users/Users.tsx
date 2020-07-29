import React from 'react';
import {usersDataType} from "../../Redux/Store";
import S from './Users.module.css'
import * as axios from 'axios';

type UsersTypes = {
    users:Array<usersDataType>,
    onFollow:(userID:string)=>void,
    onUnFollow:(userID:string)=>void,
    onSetUsersAC:(users:any)=>void

}

let Users = (props:UsersTypes) => {

let getUsers = () =>{
    if(props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.onSetUsersAC(response.data.items)
            })
    }
}
    return<div>
        {
        props.users.map(u=> <div key={u.id}><span> <div> <img src={u.photoUrl} className={S.userPhoto}/> </div>
                                                   <div>
                                                       {u.followed?<button onClick ={()=>props.onFollow(u.id)}>Follow</button>:
                                                           <button onClick ={()=>props.onUnFollow(u.id)}>Unfollow</button>}

                                                   </div>
        </span>
        <span>
            <span><div>{u.fullName}</div><div>{u.status}</div>
            </span>
            <span><div>{u.location.city}</div><div>{u.location.country}</div>
            </span>
        </span>
        </div>)
    }

    </div>

    }

export default Users;