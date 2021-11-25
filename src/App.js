import './App.css';
import { useState } from "react";
import React from "react";
import Router from "./Router/Index";
function App ( ) {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);
  return (
    <>
        <Router
            students={students}
            groups={groups}
            setStudents={setStudents}
            setGroups={setGroups}
        />
    </>
  );
};
export default App;
