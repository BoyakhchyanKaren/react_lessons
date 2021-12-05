import userAction from "./userType";
const userState = {
    users:[{
        "id": 1,
        "first_name": "Haskel",
        "last_name": "Aimson",
        "email": "haimson0@umich.edu"
    }, {
        "id": 2,
        "first_name": "Sherwin",
        "last_name": "Ratter",
        "email": "sratter1@naver.com"
    }, {
        "id": 3,
        "first_name": "Arleta",
        "last_name": "Heppner",
        "email": "aheppner2@nba.com"
    }, {
        "id": 4,
        "first_name": "Cordy",
        "last_name": "Saunter",
        "email": "csaunter3@networksolutions.com"
    }, {
        "id": 5,
        "first_name": "Reggy",
        "last_name": "Guyet",
        "email": "rguyet4@ihg.com"
    }, {
        "id": 6,
        "first_name": "Geri",
        "last_name": "Begley",
        "email": "gbegley5@ucla.edu"
    }, {
        "id": 7,
        "first_name": "Edyth",
        "last_name": "Rainford",
        "email": "erainford6@cocolog-nifty.com"
    }, {
        "id": 8,
        "first_name": "Lemuel",
        "last_name": "Pook",
        "email": "lpook7@sciencedirect.com"
    }, {
        "id": 9,
        "first_name": "Bernarr",
        "last_name": "Lockhead",
        "email": "blockhead8@tmall.com"
    }, {
        "id": 10,
        "first_name": "Lotte",
        "last_name": "Beddard",
        "email": "lbeddard9@dailymotion.com"
    }],
};
let deleteOne = (state, ID) => {
    return state.users.filter((el, index) => el.id !== ID);
};
let addOne = (state, newUser) => {
    return [
        ...state.users,
        {
            ...newUser,
            id:state.users[state.users.length - 1]?.id + 1 || 1
        }
    ]
}
function userReducer(state=userState, {type, payload}) {
    switch (type){
        case userAction.ADD_USER:
            state.users = addOne(state, payload.newUser);
            break;
        case userAction.DELETE_USER:
            state.users = deleteOne(state, payload.id)
            break;
        default:
            break;
    }
    return {...state};
};
export default userReducer;