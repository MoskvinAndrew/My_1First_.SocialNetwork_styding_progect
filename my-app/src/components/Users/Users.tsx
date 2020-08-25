import S from "./Users.module.css";
import React from "react";
import {usersDataType} from "../../Redux/Store";
import {NavLink} from "react-router-dom";

export type UsersTypes = {
    onClickHandler: (p: number) => void
    currentPage: number
    users: Array<usersDataType>
    FollowAC: (id: string) => void
    unfollow: (id: string) => void
    totalUsersCount: number
    pageSize: number
}


export let UsersFunctional = (props: UsersTypes) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => <span onClick={() => {
                props.onClickHandler(p)
            }} className={props.currentPage === p ? S.selectedPage : ""}>{p}</span>)}

            {props.users.map((u: any) => <div key={u.id}><span>
        <div>
            <NavLink to={'/profile/' + u.id}>
            <img
                src={u.photo ? "" : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'}
                className={S.userPhoto}/>
            </NavLink>
        </div>
        <div>
            {u.followed ?
                <button onClick={() => props.FollowAC(u.id)}>Follow</button> :
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>}

        </div>
         </span>
                <span>
             <span>
                 <div>{u.name}</div>
                 <div>{'Surname'}</div>
            </span>
             <span>
                 <div>{'u.location.city'}</div>
                 <div>{props.totalUsersCount}</div>
            </span>
        </span>
            </div>)
            }

        </div>)
}

