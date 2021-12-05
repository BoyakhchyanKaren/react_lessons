import postAction from "./postType";
import axios from "axios";

export function DeletePost ( data ) {
    return {
        type: postAction.DELETE_POST,
        payload: data,
    }
};

export function CreateOne ( data ) {
    return {
        type: postAction.CREATE_POST,
        payload: data,
    }
};

export function createPosts ( data ) {
    return {
        type:postAction.CREATE_POSTS,
        payload:data,
    }
}


export function getPosts () {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then(posts => {
            dispatch(createPosts({posts:posts.data}))
        })
    }
}