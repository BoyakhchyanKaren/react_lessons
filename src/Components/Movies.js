import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../store";
import "../App.css";
function Movies() {
    const {movies} = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <div>
            {
                movies.map((movie,indexMovie) => {
                    return (
                        <div key={indexMovie}>
                            <ul>
                                <button
                                    className="btn btn-info"
                                    onClick={() => {
                                        dispatch({type:ACTIONS.DELETE_ONE, id:movie.id})
                                    }}
                                > Delete Image </button>
                                <li>Title: {movie.movie_title}</li>
                                <li>Genre: {movie.movie_genre}</li>
                                <li>Director: {movie.director}</li>
                                <img className="img-movie" src={movie.img_url} alt={movie.movie_title}/>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default Movies;