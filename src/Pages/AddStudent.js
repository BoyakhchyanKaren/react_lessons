import { useState } from "react";
function AddStudent( {students ,setStudents} ){
    const defaultValue = {
        id:Math.round(Math.random() * 50),
        name:"",
        username: "",
    }
    const [student, addStudent] = useState(defaultValue);
    return (
        <div className="w-25 border p-3">
            <input
                type="text"
                value={student.name}
                placeholder="name"
                className="form-control my-2"
                onChange={(e) => addStudent({...student, name:e.target.value, id:Math.round(Math.random() * 50)}) }
            />
            <input
                type="text"
                value={student.username}
                placeholder="surname"
                className="form-control my-2"
                onChange={(e) => addStudent({...student, username:e.target.value, id:Math.round(Math.random() * 50)}) }
            />
            <button
                onClick={() => {
                    setStudents([...students, student])
                    addStudent(defaultValue)
                }}
                className="btn btn-warning"
            >
            Save
            </button>
        </div>
    )
};


export default AddStudent;