import {v1} from "uuid";
import {postsDataType, profilePageType} from "./Store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";

let initialState = {
    newPostText: "",
    postsData: [
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 7},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'How are you?', likes: 12},
        {id: v1(), message: 'My name is Andrew', likes: 777}
    ]
}


const profileReducer = (state: profilePageType = initialState, action: any) => {

    switch (action.type) {

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;


        case ADD_POST:
            let newPost: postsDataType = {id: v1(), message: state.newPostText, likes: 0};
            state.postsData.unshift(newPost);
            console.log(state.postsData)
            state.newPostText = "";
            return state;



         case ADD_LIKE:
             let f = state.postsData.find(f => f.id == action.id);/*попытка изменять лайки*/
             if (f) {
                 (f.likes) = (f.likes) + 1;
                 return state;
             }

        default:
            return state;

    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const newTextAreaValueActionCreator = (textNew: string) => ({type: UPDATE_NEW_POST_TEXT, text: textNew});
export const onLikeActionCreator = (id: string) => ({type: ADD_LIKE, id: id});

export default profileReducer;