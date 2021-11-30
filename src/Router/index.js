import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "../Components/Movies";
import AddMovie from "../Components/AddMovie";
import Slider from "../Components/Slider";
import Header from "../Components/Header";
import NotFound from "../Components/NotFound";
import Home from "../Components/Home";
function Router() {
return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pictures" element={< Slider /> } />
            <Route path="/movies" element={< Movies />}/>
            <Route path="/addMovie" element={< AddMovie />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
)
};

export default Router;