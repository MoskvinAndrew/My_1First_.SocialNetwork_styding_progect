import React from "react";
import {
    actions

} from "../../../Redux/profile_reducer_test_selectors/profile-reducer";
import {RootState} from "../../../Redux/redux-store";
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
            dispatch(actions.addNewPostActionCreator(textNew));
        },
        onOnLikeActionCreator: (id: string) => {
            dispatch(actions.onLikeActionCreator(id))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;