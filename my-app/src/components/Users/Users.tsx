import S from "./Users.module.css";
import React from "react";
import {usersDataType} from "../../Redux/Store";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersTypes = {
    onClickHandler: (p: number) => void
    currentPage: number
    users: Array<usersDataType>
    totalUsersCount: number
    pageSize: number
    disableButtons:Array<number|null>
    UnFollow:(userId:number)=>void,
    Follow:(userId:number)=>void,

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
            {u.followed ? <button disabled={props.disableButtons.some(id=>id === u.id)} onClick={() => {
                props.UnFollow(u.id)}}>unFollow</button> :
                <button disabled={props.disableButtons.some(id=>id==u.id)} onClick={() => {
                    props.Follow(u.id)}}>Follow</button>
            }
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

