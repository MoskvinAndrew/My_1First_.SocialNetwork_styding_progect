import React from "react";
import C from "./MyPosts.module.css";
import {addNewPostActionCreator, newTextAreaValueActionCreator} from "../../../Redux/profile-reduser";
import {RootState, StoreReduxType} from "../../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

 type MypostsType = {
     dispatch:(action:any)=>void,
 };


// function MyPostsContainer (props: MypostsType) {
//
//
//  let newPost = props.store.getState().profileReducer.newPostText
//
//     let onAddNewPost = ()=>{
//         props.dispatch(addNewPostActionCreator());
//     }
//
//     let onNewTextAreaValue =(textNew:string)=>{
//         props.dispatch(newTextAreaValueActionCreator(textNew));
//     }
//
//
//     return (
//
//         <div className={C.postBlock}>
//            <MyPosts
//                     postsData={props.store.getState().profileReducer.postsData}
//                     dispatch={props.dispatch}
//                     onAddNewPost={onAddNewPost}
//                     onNewTextAreaValue={onNewTextAreaValue}
//                     newPost={newPost}
//                     store={props.store}
//            />
//
//
//         </div>
//     )
//
// };

const mapStateToProps=(state: RootState)=>{
    return{
        newPost:state.profileReducer.newPostText,
        postsData:state.profileReducer.postsData,

    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return{
        onNewTextAreaValue:(textNew:string)=>{
            dispatch(newTextAreaValueActionCreator(textNew))},

        onAddNewPost:()=>{
            dispatch(addNewPostActionCreator());
    }
}}
const MyPostsContainer: any = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;