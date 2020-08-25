import {usersDataType} from "../../Redux/Store";
import React from "react";
import * as axios from "axios";
import {UsersFunctional} from "./Users";
import {Preloader} from "../common/Preloader/preloader";


type MyPropsType = {
    follow: (id: string) => void;
    unfollow: (id: string) => void;
    users: Array<usersDataType>
    setUsers: (items: any) => void
    totalUsersCountac: (TotalUsersCount: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching:boolean
    setIsFetching:(isFetching:boolean)=>void


}


class UsersApiContain extends React.Component<MyPropsType> {


    componentDidMount() {

       this.props.setIsFetching(true);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
                this.props.totalUsersCountac(response.data.totalCount)

            })
    }

    onClickHandler = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true)
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
                this.props.totalUsersCountac(response.data.totalCount)

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
        />
        </>

    }
}

export default UsersApiContain;