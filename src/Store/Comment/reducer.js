import commentType from "./commentType";

const commentState = {
    comments:[]
};

let createCommentS = (state, comments) => {
    state.comments = comments;
    return state.comments;
}
function commentReducer (state=commentState, option) {
    switch (option.type){
        case commentType.CREATE_COMMENTS:
            console.log(option.payload.comments)
            state.comments = createCommentS(state, option.payload.comments);
            break;
        default:
            break;

    }
    return {...state}
};
 export default commentReducer;