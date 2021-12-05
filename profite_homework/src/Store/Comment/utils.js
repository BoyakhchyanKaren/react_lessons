function addComment (state, newComment) {
    if(newComment.content === '') {
        alert("Write some comment before adding...");
        return state.comments;
    }
    return [
        ...state.comments,
        {
            ...newComment,
            id: state.comments[0]?.id + 1 || 1,
        }
    ]
};
function removeComment (state, ID) {
    return state.comments.filter(comment => comment.id !== ID);
};

function deleteDependComment (state, ID) {
    return state.comments.filter(el => el.status_id !== ID);
};
export {
    addComment,
    removeComment,
    deleteDependComment,
};

