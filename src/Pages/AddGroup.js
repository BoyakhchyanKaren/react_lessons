import {useState} from "react";
import groupModel from "../Information/groupModel";
import Swal from "sweetalert2";
function AddGroup({groups, setGroups}) {
    let alertReact = () => {
        Swal.fire({
            icon: "error",
            title: "Oops,,,",
            text: "Something went wrong",
            footer: "All groups can have not less than 5 and no more than 20 people. Please fill with right way...!"
        });
    };
    const [group, addGroup] = useState(groupModel[0]);
    return (
        <div>
            <input
                type="text"
                value={group.group_name}
                placeholder="name"
                className="form-control my-2"
                onChange={(e) => addGroup({...group, group_name: e.target.value, group_id: Math.round(Math.random() * 20)})}
            />
            <input
                type="number"
                value={group.student_count}
                placeholder="students count"
                className="form-control my-2"
                onChange={(e) => addGroup({...group, student_count: e.target.value, group_id: Math.round(Math.random() * 20)})}
            />
            <br />
            <button
                onClick={()=>{
                    if(group.student_count > 5 && group.student_count < 20){
                        setGroups([...groups, group])
                        addGroup(groupModel[0])
                    }else{
                        alertReact();
                    }
                }}
                className="btn btn-info"
            >
                Save
            </button>
        </div>
    )
};
export default AddGroup;