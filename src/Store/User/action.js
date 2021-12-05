import userAction from "./userType";

export function DeleteUser (data) {
return {
    type:userAction.DELETE_USER,
    payload:data
}};
export function AddUser(data) {
    return {
        type:userAction.ADD_USER,
        payload:data
    }
}
