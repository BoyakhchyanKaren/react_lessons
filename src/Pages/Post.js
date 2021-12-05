import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import postAction from "../Store/Post/postType";
import {CreateOne, createPosts, DeletePost, getPosts} from "../Store/Post/action";
import axios from "axios";
import {Link} from "react-router-dom";
// function Post() {
//     const {posts} = useSelector((state) => state.postReducer);
//     const dispatch = useDispatch();
//     const [post, setPost] = useState({
//         "id": 0,
//         "post_name": "",
//         "title": ""
//     })
//     return (
//         <>
//             <div className="w-25 border p-3">
//                 <label>Post Name:</label>
//                 <input
//                     type="text"
//                     className="form-control my-2"
//                     value={post.post_name}
//                     onChange={(e) => setPost({...post, post_name: e.target.value})}
//                 />
//                 <label>Title:</label>
//                 <input
//                     type="text"
//                     className="form-control my-2"
//                     value={post.title}
//                     onChange={(e) => setPost({...post, title: e.target.value})}
//                 />
//                 <button
//                     className="btn btn-info"
//                     onClick={() => {
//                         dispatch(CreateOne({newPost:post}))
//                         setPost({
//                             "id": 0,
//                             "post_name": "",
//                             "title": ""
//                         })
//                     }}
//                 > Add </button>
//             </div>
//             <div>
//                 {
//                     posts.map((post, postIndex) => {
//                         return (
//                             <ul key={postIndex}>
//                                 <li>Id: {post.id}</li>
//                                 <li>PostName: {post.post_name}</li>
//                                 <li>Title: {post.title}</li>
//                                 <button
//                                     className="btn btn-info"
//                                     onClick={( ) => {
//                                     dispatch(DeletePost({id:post.id}))
//                                 }}> Delete me </button>
//                             </ul>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// };


function Post( ) {
    const {posts} = useSelector((state) => state.postReducer);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getPosts())
    },[])
    return (
        <>
            <h1>posts</h1>
            {
                posts.map((post, postIndex) => {
                    return (
                        <ul key={postIndex}>
                            <li>{post.id}</li>
                            <li>{post.title}</li>
                            <Link to={`/posts/${post.id}/comments`}>See</Link>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default Post;
