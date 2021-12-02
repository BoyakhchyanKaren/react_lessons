import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Comment from "../Pages/Comment";
import Status from "../Pages/Status";
import Header from "../Components/Header";
import AddStatuss from "../Pages/AddStatus";
function Router ( ) {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Header />}>
                        <Route path="status" element={< Status/>}/>
                        <Route path="comment" element={< Comment/>}/>
                        <Route path="addStatus" element={ <AddStatuss/> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default Router;