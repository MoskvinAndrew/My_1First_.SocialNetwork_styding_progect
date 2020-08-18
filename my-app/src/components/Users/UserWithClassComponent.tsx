import React from 'react';
import S from "./Users.module.css";
import * as axios from "axios";
import {usersDataType} from "../../Redux/Store";

type MyPropsType={
    onFollow:(id:string)=>void;
    onUnFollow:(id:string)=>void;
    users:Array<usersDataType>
    onSetUsersAC:(items:any)=>void
    onTotalUsersCountAC:(TotalUsersCount:number)=>void
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onSetCurrentPageAC:(currentPage:number)=>void


}

 class Users extends React.Component<MyPropsType> {


componentDidMount() {
    // @ts-ignore
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response:any) => {
            this.props.onSetUsersAC(response.data.items)
            this.props.onTotalUsersCountAC(response.data.totalCount)

        })

}
      onClickHandler = (p:number) =>{
         this.props.onSetCurrentPageAC(p);
          // @ts-ignore
          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
              .then((response:any) => {
                  this.props.onSetUsersAC(response.data.items)
                  this.props.onTotalUsersCountAC(response.data.totalCount)

              })
     }

     render(){

    let pagesCount =  Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount;i++){
        pages.push(i)
    }

             // @ts-ignore
         return(
                 <div>
                     {pages.map(p=><span onClick={()=>{this.onClickHandler(p)}} className={this.props.currentPage === p ?S.selectedPage:""} >{p}</span>)}

                     {this.props.users.map((u:any)=> <div key={u.id}><span> <div> <img src={u.photo?"":'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'} className={S.userPhoto}/> </div>
                                                    <div>
                                                        {u.followed?<button onClick ={()=> this.props.onFollow(u.id)}>Follow</button>:
                                                            <button onClick ={()=> this.props.onUnFollow(u.id)}>Unfollow</button>}

                                                    </div>
         </span>
                   <span>
             <span><div>{u.name}</div><div>{'zalupator'}</div>
            </span>
             <span><div>{'u.location.city'}</div><div>{this.props.totalUsersCount}</div>
            </span>
        </span>
               </div>)
           }

       </div>
       )
   }
  }

// https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg

 export default Users;