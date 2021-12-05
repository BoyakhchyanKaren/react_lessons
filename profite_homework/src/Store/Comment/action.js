import {commentType} from "./commentType";

export function AddComment (data) {
    return {
        type:commentType.ADD_COMMENT,
        payload:data,
    }
};

export function RemoveComment ( data ) {
    return {
        type:commentType.DELETE_COMMENT,
        payload:data
    }
};

export function DeleteDependComment ( data ) {
    return {
        type:commentType.REMOVE_DEPEND_COMMENT,
        payload:data,
    }
}