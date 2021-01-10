import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../Redux/redux-store";
import {putUserStatusTC, setCurrentUserStatus} from "../../../../Redux/profile-reduser";


const UserProfileStatus = () => {
    let statusStateValue = useSelector<RootState, string>(state => state.profilePage.currentUserStatus);
    const dispatch = useDispatch();

    let [edit, setEdit] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(statusStateValue);

    if(statusStateValue === ""){
        statusStateValue = "Введите статус"
    };

    const onDclickHandler = () => {
        setEdit(true);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        let valueOfStatusInput = event.currentTarget.value
            setStatus(valueOfStatusInput);
    };

    const onBlurHandler = () => {

            setEdit(false);
            dispatch(putUserStatusTC(status));
            dispatch(setCurrentUserStatus(status));

    };

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

            event.charCode === 13 &&
            setEdit(false);
            dispatch(putUserStatusTC(status));
            dispatch(setCurrentUserStatus(status));

    };


    return (
        <>
            <div>
            <span onDoubleClick={onDclickHandler}>
                {!edit ? statusStateValue :
                    <input  autoFocus
                           value={status}
                           onChange={onChangeHandler}
                           onBlur={onBlurHandler}
                           onKeyPress={onKeyPressHandler}/>}
            </span>
            </div>

        </>
    )
}
export default UserProfileStatus;