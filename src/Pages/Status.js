import {useDispatch, useSelector} from "react-redux";
import {ChangeStatus, RemoveStatus} from "../Store/Status/action";
import {useState} from "react";
import {AddComment, DeleteDependComment} from "../Store/Comment/action";
function Status( ) {
    const {status} = useSelector((state) => state.statusReducer);
    const {comments} = useSelector((state) => state.commentReducer);
    comments.sort( ( a, b ) => b.id - a.id);
    const dispatch = useDispatch();

    return (
        <div>
            {
                status.map((st, stIndex) => {
                    return (
                        <ul key={stIndex}>

                            <li>{st.status_content}</li>
                            <input
                                type="text"
                                style={{
                                    borderRadius:"20px"
                                }}
                                className="form-control my-2"
                                value={st.comment.content}
                                onChange={(e) => dispatch(ChangeStatus({text:e.target.value, id:st.id}))}
                            />
                            <button
                                style={{
                                    margin:"10px"
                                }}
                                className="btn btn-warning"
                                onClick={() => {
                                    dispatch(AddComment({newComment:{...st.comment, status_id:st.id}}));
                                    dispatch(ChangeStatus({text:'', id:st.id}))

                                }}
                            >Add comment</button>
                            <button
                                className="btn btn-warning"
                                onClick={() =>{
                                    dispatch(DeleteDependComment({id:st.id}))
                                    dispatch(RemoveStatus({id:st.id}))
                                }}
                            >Delete status</button>
                            {
                                comments.map((comment, commentIndex) => {
                                    return (
                                        comment.status_id === st.id &&
                                        <div key={commentIndex}>
                                            <ul>
                                                <li>{comment.content}</li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }
        </div>
    )
};
export default Status;