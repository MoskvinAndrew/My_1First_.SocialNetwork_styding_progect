import React from "react";
import C from "../MyPosts.module.css";





type PostType = {
    onLike:(id:string)=>void,
    message: string | number,
    likes: number,
    id:string,
}


function Post(props: PostType) {

    const Like =()=>{
        props.onLike(props.id);
    }
    return (<div className={C.item}>



        <img src="https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"/>
        {props.message}
        <div>like {props.likes}</div>
        <div className={C.heart} onClick={Like}><img src = "https://cdn-s-static.arzamas.academy/storage/microrubric_entry/557/preview_icon_picture-3c3e73b7-cf02-4515-83d5-f79b5261345a.png"/></div>
    </div>)
}

export default Post;