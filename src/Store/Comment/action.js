import commentType from "./commentType";
import axios from "axios";

export function createComments (data) {
    return {
        type:commentType.CREATE_COMMENTS,
        payload:data,
    }
}

export function setComments(id) {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(comments => {
            dispatch(createComments({comments: comments.data}))
        })
    }
}