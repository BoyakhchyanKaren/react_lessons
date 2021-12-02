import {commentType} from "./commentType";
import {addComment, removeComment, deleteDependComment} from "./utils";
const commentState = {
    comments:[
        {id:1, content:"Nice comment", status_id:1},
    ],
};


function commentReducer ( state=commentState, action) {
    switch (action.type){
        case commentType.ADD_COMMENT:
            state.comments = addComment(state, action.payload.newComment);
            break;
        case commentType.DELETE_COMMENT:
            state.comments = removeComment(state, action.payload.id);
            break;
        case commentType.REMOVE_DEPEND_COMMENT:
            state.comments = deleteDependComment(state, action.payload.id);
            break;
        default:
            break;
    }
    return {...state}
};

export default commentReducer;
