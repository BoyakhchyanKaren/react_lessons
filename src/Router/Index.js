import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AddStudent, Students } from "../Pages/index";

import Header from "../Components/Header";
function Router({students, setStudents}) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route  path="/students" element={ < Students students={students}/> }/>
                <Route path="/add" element={ <AddStudent students={students} setStudents={setStudents}/> } />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;