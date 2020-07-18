import React from "react";
import C from "./MyPosts.module.css";
import Post from "./Post/Post";
import state, { postsDataType} from "../../../Redux/Store";
import store from "../../../Redux/Store";
import {addNewPostActionCreator, newTextAreaValueActionCreator} from "../../../Redux/profile-reduser";
import PostContainer from "./Post/PostContainer";
import {StoreReduxType} from "../../../Redux/redux-store";


export type MypostsType = {
    postsData: Array<postsDataType>,
    dispatch:(action:any)=>void,
    onAddNewPost:()=>void,
    onNewTextAreaValue:(textNew:string)=>void,
    newPost:string,
    store: StoreReduxType,
};




function MyPosts(props: MypostsType) {


    let newPostData = props.postsData.map(p => <PostContainer key={p.id} message={p.message}  likes={p.likes}  id={p.id} dispatch={props.dispatch} store={props.store} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

     let addNewPost = ()=>{
         props.onAddNewPost();
     }

     let newTextAreaValue =()=>{
         if(newPostElement.current != null) {
             let textNew = newPostElement.current.value;
             props.onNewTextAreaValue(textNew);

         }}


    return (

        <div className={C.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {<textarea ref={newPostElement} onChange={newTextAreaValue} value={props.newPost}/>}
                </div>
                <div>
                    {<button onClick={addNewPost}>Add</button>}
                </div>
            </div>
            {newPostData}

        </div>
    )
};
export default MyPosts;