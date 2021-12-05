import {statusType} from "./statusType";
import {addStatus, removeStatus, changeStatus} from "./utils";
const statusStore = {
    status:[
        {
            id:1,
            status_content:"Nice status",
            comment:{
                content:''
            },
        }
    ],
};
function statusReducer (state=statusStore, option) {
    switch (option.type){
        case statusType.REMOVE_STATUS:
            state.status = removeStatus(state, option.payload.id);
            break;
        case statusType.ADD_STATUS:
            state.status = addStatus(state, option.payload.newStatus, option.payload.comments, option.payload.globalState);
            break;
        case statusType.CHANGE_STATUS:
            state.status = changeStatus(state.status, option.payload.text, option.payload.id);
            break;
        default:
            break;
    }
    return {...state};
};
export default statusReducer;