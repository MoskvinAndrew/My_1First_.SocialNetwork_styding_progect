import React from "react";
import {
    addNewPostActionCreator,
    onLikeActionCreator
} from "../../../Redux/profile-reduser";
import {RootState, StoreReduxType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state: RootState) => {
    return {
        postsData: state.profilePage.postsData,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        // onNewTextAreaValue: (textNew: string) => {
        //     dispatch(newTextAreaValueActionCreator(textNew))
        // },

        onAddNewPost: (textNew: string) => {
            dispatch(addNewPostActionCreator(textNew));
        },
        onOnLikeActionCreator: (id: string) => {
            dispatch(onLikeActionCreator(id))
        }
    }
}
const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;