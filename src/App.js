import './App.css';
import Router from "./Router/Index";
import axios from "axios";
import {useEffect, useState} from "react";
function App() {
    const [students, setStudents] = useState([]);
    useEffect( ( ) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(el => {
            setStudents(el.data);
        })
    } , [])
  return (
    <>
        <Router students={students} setStudents={setStudents}/>
    </>
  );
}

export default App;
