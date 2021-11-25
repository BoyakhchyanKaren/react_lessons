import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "../Components/Header";
import {AddGroup, AddStudent, Groups, Students, GetGroupById, NotFound} from "../Pages";
function Router ( {students, groups, setStudents, setGroups} ) {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header />
                < Routes >
                    <Route path="/students" element={< Students students={students} groups={groups}/>} />
                    <Route path="/groups" element={< Groups groups={groups} students={students}/>} />
                    <Route path="/addStudent" element={ < AddStudent students={students} setStudents={setStudents} groups={groups} setGroups={setGroups}/> } />
                    <Route path="/addGroup" element={< AddGroup groups={groups} setGroups={setGroups} />} />
                    <Route path="/groups/:id" element={< GetGroupById students={students} groups={groups} setStudents={setStudents}/> } />
                    <Route path="*" element={ < NotFound/> } />
                < /Routes >
            </BrowserRouter>
        </React.Fragment>
    )
};

export default Router;