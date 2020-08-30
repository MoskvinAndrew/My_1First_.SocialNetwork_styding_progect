import {usersDataType} from "../../Redux/Store";
import React from "react";
import * as axios from "axios";
import {UsersFunctional} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";



type MyPropsType = {
    follow: (id: string) => void,
    unfollow: (id: string) => void,
    users: Array<usersDataType>,
    setUsers: (items: any) => void,
    totalUsersCountAC: (TotalUsersCount: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    isFetching:boolean,
    setIsFetching:(isFetching:boolean)=>void,
    disableButtons:Array<number|null>,
    setTogleFollowingProgres:(isFetching:boolean, id:number)=>void,




}


class UsersApiContain extends React.Component<MyPropsType> {


    componentDidMount() {

       this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then((data) => {

                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
                this.props.totalUsersCountAC(data.totalCount);

            })
    }

    onClickHandler = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true)


        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{withCredentials: true})
        usersAPI.getUsers(p,this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
                this.props.totalUsersCountAC(data.totalCount)

            })
    }

    render() {

        return <>
            {this.props.isFetching? <Preloader/>:null}
            <UsersFunctional
            onClickHandler={this.onClickHandler}
            currentPage={this.props.currentPage}
            users={this.props.users}
            FollowAC={this.props.follow}
            unfollow={this.props.unfollow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            disableButtons={this.props.disableButtons}
            setTogleFollowingProgres={this.props.setTogleFollowingProgres}


        />
        </>

    }
}

export default UsersApiContain;