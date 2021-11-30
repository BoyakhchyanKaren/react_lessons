import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {ACTIONS} from "./store";
import form from "./store";
import {Provider} from "react-redux";

let rightArrow = (state) => {
    let count = state.count;
    if(count === state.images.length - 1) {
        state.count = 0;
    }else{
        state.count = state.count + 1;
    };
    return state;
};
let leftArrow = (state) => {
    let count = state.count
    if(count === 0){
        state.count = state.images.length - 1;
    }else{
        state.count = state.count - 1;
    };
    return state;
};

let addMovie = (state) => {
    state.movies = [
        ...state.movies,
        state.movie,
    ]
    return state.movies;
};
let change = (state, opt) =>{
    state.movie = {
        ...state.movie,
        id: state.movies.length + 1,
        movie_title: opt.text1 || state.movie.movie_title,
        director: opt.text2 || state.movie.director,
        movie_genre: opt.text3 || state.movie.movie_genre,
        image_url: opt.text4 || state.movie.image_url,
        // image_url: URL.createObjectURL(opt.text4) || state.movie.image_url,
    }
    return state.movie;
};
let deleteOne = (state, ID) => {
    return state.movies.filter((el,index) => el.id !== ID);
};
function myReducer(state=form, option) {
    switch (option.type){
        case ACTIONS.PREV_SLIDE:
            state = leftArrow(state)
            break;
        case ACTIONS.NEXT_SLIDE:
            state = rightArrow(state)
            break;
        case ACTIONS.CHANGE_MOVIE:
            // state.movie = Object.assign({} , state.movie, {movie_title: option.text} );
            state.movie = change(state, option)
            break;
        case ACTIONS.ADD_MOVIE:
            state.movies = addMovie(state);
            state.movie = form.movie;
            break;
        case ACTIONS.DELETE_ONE:
            state.movies = deleteOne(state, option.id);
            break;
        default:
            break;
    };
    return {...state};
};

const store = createStore(myReducer);
store.subscribe(( ) => {
    console.log("Store");
    console.log(store.getState());
})
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);