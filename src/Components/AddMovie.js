import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../store";

function AddMovie() {
    const dispatch = useDispatch();
    const { movies, movie } = useSelector((state) => state);
    console.log(movies);
    return (
        <>
        <div className="w-25 border p-3">
            <label>Movie title:</label>
            <input
                className="form-control my-2"
                value={movie.movie_title}
                type="text"
                onChange={(e) => dispatch({type:ACTIONS.CHANGE_MOVIE, text1: e.target.value})}
            />
            <label>Movie director:</label>
            <input
                className="form-control my-2"
                value={movie.director}
                type="text"
                onChange={(e) => dispatch({type:ACTIONS.CHANGE_MOVIE, text2: e.target.value})}
            />
            <label>Movie genre:</label>
            <input
                className="form-control my-2"
                value={movie.movie_genre}
                type="text"
                onChange={(e) =>  dispatch({type:ACTIONS.CHANGE_MOVIE, text3: e.target.value})}
            />
            <label>Photo:</label>
            <input
                className="form-control my-2"
                value={movie.image_url}
                type="file"
                onChange={(e) => dispatch({type:ACTIONS.CHANGE_MOVIE, text4:e.target.value})}
            />
            <button
                className="btn btn-info"
                onClick={(e) => {
                    dispatch({type:ACTIONS.ADD_MOVIE})
                }}
            >
                Add
            </button>
        </div>
        </>
    )
};
export default AddMovie;