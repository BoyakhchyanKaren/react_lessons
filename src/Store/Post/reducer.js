import postAction from "./postType";
const postState = {
    posts:[]
    // posts:[{
    //     "id": 1,
    //     "post_name": "Octinoxate and Titanium dioxide",
    //     "title": "NULL"
    // }, {
    //     "id": 2,
    //     "post_name": "SODIUM CHLORIDE, SODIUM GLUCONATE, SODIUM ACETATE, POTASSIUM CHLORIDE, and MAGNESIUM CHLORIDE",
    //     "title": "🚾 🆒 🆓 🆕 🆖 🆗 🆙 🏧"
    // }, {
    //     "id": 3,
    //     "post_name": "Escitalopram Oxalate",
    //     "title": "1.00"
    // }, {
    //     "id": 4,
    //     "post_name": "PAMIDRONATE DISODIUM",
    //     "title": ",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’"
    // }, {
    //     "id": 5,
    //     "post_name": "ZONISAMIDE",
    //     "title": "''"
    // }, {
    //     "id": 6,
    //     "post_name": "Desoximetasone",
    //     "title": "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻"
    // }, {
    //     "id": 7,
    //     "post_name": "Insulin lispro",
    //     "title": "NIL"
    // }, {
    //     "id": 8,
    //     "post_name": "NEUROSPORA INTERMEDIA",
    //     "title": "社會科學院語學研究所"
    // }, {
    //     "id": 9,
    //     "post_name": "Tolnaftate",
    //     "title": "$1.00"
    // }, {
    //     "id": 10,
    //     "post_name": "enzalutamide",
    //     "title": "和製漢語"
    // }],
};
let deleteOne = (state, ID) => {
    return state.posts.filter((el,index) => el.id !== ID);
};
let createOne = (state, newPost) => {
    return [
        ...state.posts,
        {
            ...newPost,
            id:state.posts[state.posts.length - 1]?.id + 1 || 1,
        }
    ]
};

let createPOSTS = ( state, posts ) => {
    state.posts = posts;
    return state.posts;
}
function postReducer (state=postState, option) {
    switch (option.type){
        case postAction.CREATE_POST:
            state.posts = createOne(state, option.payload.newPost);
            break;
        case postAction.DELETE_POST:
            state.posts = deleteOne(state, option.payload.id)
            break;
        case postAction.CREATE_POSTS:
            state.posts = createPOSTS(state, option.payload.posts);
            break;
        default:
            break;
    }
    return {...state}
};
export default postReducer;