import appReducers from "./reducers";
import {createStore} from "redux";

const store = createStore(appReducers);

store.subscribe( ( ) => {
    console.log("Observable is working properly!")
    console.log(store.getState(), "State changed...!");
    setTimeout(function () {
        console.log("Observer is working!");
    } , 200);
});


export default store;