import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setComments} from "../Store/Comment/action";

function Comment() {
    const {id} = useParams();
    const posts = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    const {comments} = useSelector((state) => state.commentReducer);
    useEffect(() => {
        dispatch(setComments(id));
    }, []);
    console.log(comments);
    return (
        <>
            {
                comments.map((comment, commentIndex) => {
                    return (
                        <ul key={commentIndex}>
                            <li>{comment.name}</li>
                        </ul>
                    )
                })
            }
        </>
    )

};
export default Comment;