import {statusType} from "./statusType";

export function AddStatus ( data ) {
    return {
        type:statusType.ADD_STATUS,
        payload:data,
    }
};

export function RemoveStatus ( data ) {
    return {
        type:statusType.REMOVE_STATUS,
        payload:data
    }
};

export function ChangeStatus (data) {
    return {
        type:statusType.CHANGE_STATUS,
        payload:data
    }
};