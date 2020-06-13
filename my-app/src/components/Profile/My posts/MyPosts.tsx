import React from "react";
import C from "./MyPosts.module.css";
import Post from "./Post/Post";
import {indexT} from "../../../index";


export type MypostsTypes = {
    postsData: Array<indexT>
};

function MyPosts(props: MypostsTypes) {


    let newpostData = props.postsData.map(p => <Post key={p.id} message={p.message} likes={p.likes}/>)

    return (
        <div className={C.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            {newpostData}


        </div>
    )
};
export default MyPosts;