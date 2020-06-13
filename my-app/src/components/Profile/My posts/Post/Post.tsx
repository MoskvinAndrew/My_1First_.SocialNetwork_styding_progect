import React from "react";
import C from "../MyPosts.module.css";


type Post = {
    message: string | number,
    likes: string,
}


function Post(props: Post) {
    return (<div className={C.item}>

        <img src="https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"/>
        {props.message}
        <div>like {props.likes}</div>
    </div>)
}

export default Post;