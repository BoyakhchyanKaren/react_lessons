import './App.css';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import { Singers, SingerPage, Home, NotFound } from "./Pages/index"
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/singers" element={ <Singers /> } />
            <Route path="/singers/:id" element={ <SingerPage /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;


//react-router-dom
//axios