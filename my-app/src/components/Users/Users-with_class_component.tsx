import React from 'react';
import S from "./Users.module.css";
import * as axios from "axios";
//
//
//
// class Users extends React.Component {
//
//     constructor(props:any){
//         super(props);
//         // @ts-ignore
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then((response:any) => {
//
//                     // @ts-ignore
//                     this.props.onSetUsersAC(response.data.items)
//                 })
//         }
//
//         render(){
//
//             return(
//
//       <div>
//           {this.props.users.map((u:any)=> <div key={u.id}><span> <div> <img src={u.photoUrl} className={S.userPhoto}/> </div>
//                                                    <div>
//                                                        {u.followed?<button onClick ={()=> this.props.onFollow(u.id)}>Follow</button>:
//                                                            <button onClick ={()=> this.props.onUnFollow(u.id)}>Unfollow</button>}
//
//                                                    </div>
//         </span>
//                   <span>
//             <span><div>{u.fullName}</div><div>{u.status}</div>
//             </span>
//             <span><div>{u.location.city}</div><div>{u.location.country}</div>
//             </span>
//         </span>
//               </div>)
//           }
//
//       </div>
//       )
//   }
//   }
//
//
//
// export default Users;