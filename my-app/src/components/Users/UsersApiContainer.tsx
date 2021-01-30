import {usersDataType} from "../../Redux/Store";
import React from "react";
import {UsersFunctional} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {Paginator} from "../common/Paginator/Paginator";
import {useDispatch} from "react-redux";
import {actions} from "../../Redux/users-reducer";




type MyPropsType = {
    users: Array<usersDataType>,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPageAC:(currentPage:number) => void,
    currentPage: number,
    isFetching:boolean,
    disableButtons:Array<number|null>,
    getUsersTC:(currentPage:number,pageSize:number)=>void,
    UnFollowTC:(userId:number)=>void,
    FollowTC:(userId:number)=>void,
}


class UsersApiContain extends React.Component<MyPropsType> {



    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize);
    };
    onClickHandler = (p: number) => {
         this.props.setCurrentPageAC(p);
         this.props.getUsersTC(p,this.props.pageSize);
    };

    render() {

        return <>
            <Paginator currentPage={this.props.currentPage}
                       totalItemsCount={this.props.totalUsersCount}
                       onClickHandler={this.onClickHandler}
                       pageSize={this.props.pageSize}
                       portionSize={10} />


            {this.props.isFetching? <Preloader/>:
                <UsersFunctional
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                disableButtons={this.props.disableButtons}
                UnFollow={this.props.UnFollowTC}
                Follow={this.props.FollowTC}


            />}


        </>

    }
}

export default UsersApiContain;