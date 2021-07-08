import {usersDataType} from "../../Redux/Store";
import React from "react";
import {UsersFunctional} from "./Users";
import {Preloader} from "../common/Preloader/preloader";
import {Paginator} from "../common/Paginator/Paginator";
import UsersSearchForm from "../common/UsersSearchForm/SearchForm";
import {FilterType} from "../../Redux/user_reducer_test_selectors/users-reducer";


type MyPropsType = {
    users: Array<usersDataType>,
    totalUsersCount: number,
    pageSize: number,
    setCurrentPageAC:(currentPage:number) => void,
    currentPage: number,
    isFetching:boolean,
    disableButtons:Array<number|null>,
    getUsersTC:(currentPage:number,pageSize:number,filter:FilterType)=>void,
    UnFollowTC:(userId:number)=>void,
    FollowTC:(userId:number)=>void,
    filter:FilterType
}


class UsersApiContain extends React.Component<MyPropsType> {



    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize,this.props.filter);
    };
    onClickHandler = (p: number) => {
         this.props.setCurrentPageAC(p);
         this.props.getUsersTC(p,this.props.pageSize,this.props.filter);
    };
    onFilterChanged = (filter:FilterType) => {
        this.props.getUsersTC(1,this.props.pageSize,filter);
    }

    render() {

        return <>
        <div>
            <UsersSearchForm onFilterChanged={this.onFilterChanged}/>
        </div>
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
                filter={this.props.filter}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}


            />}


        </>

    }
}

export default UsersApiContain;