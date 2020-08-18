import React from 'react';
// import {usersDataType, usersPageType} from "../../Redux/Store";
// import S from './Users.module.css'
// import * as axios from 'axios';
// import {v1} from "uuid";
//
// type UsersTypes = {
//     users: Array<usersDataType>,
//     onFollow: (userID: string) => void,
//     onUnFollow: (userID: string) => void,
//     onSetUsersAC: (users: any) => void,
//     totalUsersCount: number
//     pageSize: number
//     currentPage: number
//     onTotalUsersCountAC:(TotalUsersCount:number)=>void
//
// }
// let Users = (props: UsersTypes) => {
//     let pages = [];
//
//     if (props.users.length === 0) {
//
//         // @ts-ignore
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
//             .then((response: any) => {
//
//                 props.onSetUsersAC(response.data.items)
//                 // props.onTotalUsersCountAC(response.)
//             })
//
//         let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//         }
//
//     }
//
//
//     return <div>
//
//
//         <div>
//             {pages.map(p => {
//                 return <span className={props.currentPage === p ? S.selectedPage : ''}>{p}</span>
//             } )}
//         </div>
//
//
//         {props.users.map((u: any) => <div key={u.id}><span> <div> <img src={u.photos.small} className={S.userPhoto}/> </div>
//                                                    <div>
//                                                        {u.followed ? <button
//                                                                onClick={() => props.onFollow(u.id)}>Follow</button> :
//                                                            <button
//                                                                onClick={() => props.onUnFollow(u.id)}>Unfollow</button>}
//
//                                                    </div>
//         </span>
//             <span>
//             <span><div>{u.name}</div><div>{u.status}</div>
//             </span>
//             <span><div>{'u.location.city'}</div><div>{'u.location.country'}</div>
//             </span>
//         </span>
//         </div>)
//         }
//
//     </div>
//
// }
//
// export default Users;