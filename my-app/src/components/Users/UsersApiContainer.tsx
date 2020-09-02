import {usersDataType} from "../../Redux/Store";
import React from "react";
import * as axios from "axios";
import {UsersFunctional} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";
import {UnFollow} from "../../Redux/users-reduser";




type MyPropsType = {
    users: Array<usersDataType>,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    isFetching:boolean,
    disableButtons:Array<number|null>,
    getUsers:(currentPage:number,pageSize:number)=>void,
    UnFollow:(userId:number)=>void,
    Follow:(userId:number)=>void,




}


class UsersApiContain extends React.Component<MyPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    };
    onClickHandler = (p: number) => {
         this.props.setCurrentPage(p);
         this.props.getUsers(p,this.props.pageSize);
    };

    render() {

        return <>
            {this.props.isFetching? <Preloader/>:null}
            <UsersFunctional
            onClickHandler={this.onClickHandler}
            currentPage={this.props.currentPage}
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            disableButtons={this.props.disableButtons}
            UnFollow={this.props.UnFollow}
            Follow={this.props.Follow}


        />
        </>

    }
}

export default UsersApiContain;