import S from "./Users.module.css";
import React, {useEffect} from "react";
import {usersDataType} from "../../Redux/Store";
import {NavLink, useHistory} from "react-router-dom";
import {FilterType, getUsersTC} from "../../Redux/user_reducer_test_selectors/users-reducer";
import {useDispatch} from "react-redux";
import * as queryString from "querystring";
import {Button} from "antd";


export type UsersTypes = {
    users: Array<usersDataType>
    totalUsersCount: number,
    disableButtons: Array<number | null>,
    UnFollow: (userId: number) => void,
    Follow: (userId: number) => void,
    filter: FilterType,
    currentPage: number,
    pageSize: number,

}


export const UsersFunctional: React.FC<UsersTypes> = React.memo(({currentPage,filter,...props}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     history.push({
    //         pathname:'/users',
    //         search:`?term=${props.filter.term}&friend=${props.filter.friend}&page=${props.currentPage}`
    //     })
    // },[props.filter,props.currentPage])

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as {term:string,friend:string,page:string} /*substr - для того чтобы убрать ?знак от первого ключа(это БАГ)*/
        console.log( parsed)

        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })



        let actualPage = currentPage
        let actualFilter = filter

        if(!!parsed.page)actualPage=Number(parsed.page)
        if(!!parsed.friend)actualFilter = {...actualFilter,friend: parsed.friend ===null?null:parsed.friend==="true"?true:false}
        if(!!parsed.term) actualFilter = {...actualFilter,term: parsed.term as string}
        // console.log(actualPage,props.pageSize,actualFilter)
        // dispatch(getUsersTC(actualPage,props.pageSize,actualFilter))  /*16 выпуск путь самурая 2.0*/

    }, [filter])
    return (

        <div>

            {props.users.map((u: any) => <div key={u.id}><span>
                <div>
            <NavLink to={'/profile/' + u.id}>

            <img
                src={u.photos.large || u.photos.small ? u.photos.large || u.photos.small : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'}
                className={S.userPhoto}/>
            </NavLink>
        </div>
        <div>
            {u.followed ? <button disabled={props.disableButtons.some(id => id === u.id)} onClick={() => {
                    props.UnFollow(u.id)
                }}>unFollow</button> :
                <Button type={"primary"} disabled={props.disableButtons.some(id => id == u.id)} onClick={() => {
                    props.Follow(u.id)
                }}>Follow</Button>
            }
        </div>
         </span>
                <span>
             <span>
                 <div>{u.name}</div>
                 <div>{'Surname'}</div>
            </span>
             <span>
                 <div>{'asd'}</div>
                 <div>{props.totalUsersCount}</div>

            </span>
        </span>
            </div>)
            }

        </div>)
})

