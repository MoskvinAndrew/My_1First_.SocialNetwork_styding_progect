import React from "react";
import C from "./MyPosts.module.css";
import Post from "./Post/Post";
import state, {addNewPostActionCreator, newTextAreaValueActionCreator, postsDataType} from "../../../Redux/State";
import store from "../../../Redux/State";






export type MypostsType = {
    postsData: Array<postsDataType>,
    dispatch:(action:any)=>void,
};




function MyPosts(props: MypostsType) {




    let newPostData = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likes} dispatch={props.dispatch} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

     let addNewPost = ()=>{
         props.dispatch(addNewPostActionCreator());
     }

     let newTextAreaValue =()=>{
         if(newPostElement.current != null) {
             let textNew = newPostElement.current.value
             let action = newTextAreaValueActionCreator(textNew);
             props.dispatch(action);
         }
     }


    return (

        <div className={C.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    {<textarea ref={newPostElement} onChange={newTextAreaValue} value={store.getState().profilePage.newPostText}/>}
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