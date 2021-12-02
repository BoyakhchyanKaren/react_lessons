function addStatus (state, newSts) {
    if(newSts.status_content === ""){
        alert("Please write some text before saving...")
        return state.status;
    }
    return  [
        ...state.status,
        {
            ...newSts,
            id:state.status[state.status.length - 1]?.id + 1 || 1,
        }
    ]
};
function changeStatus(status, text, id) {
    let st = status.find(el=>el.id === +id)
    st.comment.content=text
    return status
};

function removeStatus (state, ID) {
    return state.status.filter(st => st.id !== ID);
};

export {
    addStatus,
    removeStatus,
    changeStatus
};