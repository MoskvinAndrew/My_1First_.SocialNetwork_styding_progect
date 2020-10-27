import React from "react";
import C from "../MyPosts.module.css";
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';





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
    return (
        <div className={C.item}>
            <div className={C.contentPost}>
           <div className={C.postImg}><img src="https://www.meme-arsenal.com/memes/335bf12b9769dbcefc4de998cd023aae.jpg"/> </div>
            <div className={C.message} >{props.message}</div>
            <div className={C.heart} onClick={Like}><div className={C.likeCounter}>{props.likes}</div><div><FavoriteBorderSharpIcon/></div></div>
            </div>
    </div>)
}

export default Post;

