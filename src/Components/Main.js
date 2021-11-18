import {useState} from "react";
import React from "react";
import data from "./info";
function Main(){
    let [groups, setGroups] = useState(data);
    let addCounter = (stdInd, grInd, gradeInd) => {
        let newGroups = [...groups];
        if(newGroups[grInd].students[stdInd].grades[gradeInd].grade < 15){
            newGroups[grInd].students[stdInd].grades[gradeInd].grade = newGroups[grInd].students[stdInd].grades[gradeInd].grade  + 1;
            setGroups(newGroups);
        }else{
            return;
        }
    };
    let extractCounter = (stdInd, grInd, gradeInd) => {
        let newGroups = [...groups];
        if(newGroups[grInd].students[stdInd].grades[gradeInd].grade > 2){
            newGroups[grInd].students[stdInd].grades[gradeInd].grade = newGroups[grInd].students[stdInd].grades[gradeInd].grade - 1;
            setGroups(newGroups);
        }else{
            return;
        }
    }
    return (
        <table className="table table-bordered main-table">
            <thead>
                <tr>
                    <th>Group</th>
                    <th>Students</th>
                </tr>
            </thead>
            <tbody>
            {
                groups.map((group,groupIndex)=>{
                    return (
                        <React.Fragment key={groupIndex}>
                            <tr>
                                <th>{group.group_name}</th>
                                <td>
                                    <table className="table-nested table table-bordered tr-nested">
                                        <thead>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Marks</th>
                                        </thead>
                                        <tbody>
                                        {
                                            group.students.map((student, studentIndex)=>{
                                                return (
                                                    <React.Fragment key={studentIndex}>
                                                        <tr>
                                                            <td>{student.name}</td>
                                                            <td>{student.surname}</td>
                                                            <td>
                                                                <table className="table-nested table table-bordered tbody-3">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Subject</th>
                                                                            <th>Rate</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        student.grades.map((grade, gradeIndex)=>{
                                                                            return (
                                                                                <React.Fragment key={gradeIndex}>
                                                                                    <tr>

                                                                                        <td>{grade.subject}</td>
                                                                                        <td>
                                                                                                <button onClick={
                                                                                                () => addCounter(studentIndex, groupIndex, gradeIndex)
                                                                                                } className="button-grade-1">+</button>
                                                                                        {grade.grade}
                                                                                                <button onClick={
                                                                                                () => extractCounter(studentIndex, groupIndex, gradeIndex)
                                                                                                } className="button-grade-2">-</button>
                                                                                        </td>
                                                                                    </tr>
                                                                                </React.Fragment>
                                                                            )
                                                                        })
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })
            }
            </tbody>
        </table>
    )
};
export default Main;