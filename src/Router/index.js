import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Post from "../Pages/Post";
import User from "../Pages/User";
import Header from "../Components/Header";
import Comment from "../Pages/Comment";
function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="user" element={<User/>}/>
                        <Route path="posts" element={<Post/>}/>
                        <Route path="posts/:id/comments" element={< Comment/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Router;