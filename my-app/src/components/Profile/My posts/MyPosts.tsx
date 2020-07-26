import React from "react";
import C from "./MyPosts.module.css";
import  { postsDataType} from "../../../Redux/Store";
import PostContainer from "./Post/PostContainer";




export type MypostsType = {
    postsData: Array<postsDataType>,
    onAddNewPost:()=>void,
    onNewTextAreaValue:(textNew:string)=>void,
    newPost:string,
    dispatch:(action:any)=>void,

};




function MyPosts(props: MypostsType) {
    let newPostData = props.postsData.map(p => <PostContainer key={p.id} message={p.message}  likes={p.likes}  id={p.id} dispatch={props.dispatch}  />)
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