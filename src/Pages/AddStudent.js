import {useState} from "react";
import React from "react";
import studentModel from "../Information/studentModel";
import Select from "react-select";
import Swal from "sweetalert2";
function AddStudent({setStudents, students, groups}) {
    const [student, addStudent] = useState(studentModel[0]);
    let onChangeInput = (e) => {
        const id = e.value;
        const group = groups.find(el => el.group_id === id);
        addStudent({
            ...student,
            group_id:group.group_id
        })
    };
    const arr = [];
    groups.forEach(el => {
        arr.push({label:el.group_name, value:el.group_id})
    });
    let alertReact = () =>{
        Swal.fire({
            icon: "error",
            title: "Oops,,,",
            text: "Something went wrong",
            footer: "Please fill all fields...!"
        });
    }
    return (
        <div>
            <input
              type="text"
              value={student.std_name}
              className="form-control my-2"
              placeholder="name"
              onChange={(e) => addStudent({...student, std_name:e.target.value, student_id:Math.round(Math.random() * 50)})}
            />
            <input
                type="text"
                value={student.std_surname}
                className="form-control my-2"
                placeholder="surname"
                onChange={(e) => addStudent({...student, std_surname:e.target.value, student_id:Math.round(Math.random() * 50)})}
            />
            <Select options={arr} onChange={onChangeInput}/>
            <br />
            <button
                onClick={() => {
                    if(student.std_name === '' || student.std_surname === ''){
                        alertReact();
                    }else{
                        setStudents([...students, student])
                        addStudent(studentModel[0])
                    }
                }}
                className="btn btn-info"
            >
                Save
            </button>
        </div>
    )
};
export default AddStudent;