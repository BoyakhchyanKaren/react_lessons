import {useDispatch, useSelector} from "react-redux";
import {RemoveComment} from "../Store/Comment/action";

function Comment() {
    let {comments} = useSelector((state) => state.commentReducer);
    const dispatch = useDispatch();
    comments.sort( ( a, b ) => b.id - a.id);
    console.log(comments);
    return (
        <div>
            {
                comments.map((comment, commentIndex) => {
                    return (
                        <ul key={commentIndex}>
                            <li>{comment.content}</li>
                            <button
                                onClick={() => {
                                    dispatch(RemoveComment({id:comment.id}))
                                }}
                                className="btn btn-success"
                            >Remove comment</button>
                        </ul>
                    )
                })
            }
        </div>
    )
};
export default Comment;