import React from "react";
import {
    addNewPostActionCreator,
    onLikeActionCreator
} from "../../../Redux/profile-reduser";
import {RootState, StoreReduxType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootState) => {
return {
     postsData: state.profilePage.postsData
}

};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddNewPost: (textNew: string) => {
            dispatch(addNewPostActionCreator(textNew));
        },
        onOnLikeActionCreator: (id: string) => {
            dispatch(onLikeActionCreator(id))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;