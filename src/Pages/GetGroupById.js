import {useParams} from "react-router-dom";
function GetGroupById({groups,students,setStudents}) {
    const {id} = useParams();
    const std_id = groups[id].group_id;
    const stds = students.filter(el => {
        if(el.group_id === std_id){
            return el
        }
    });
    console.log(stds);
    let deleteOne = (std_id) => {
        const stds = students.filter((el,index) => el.student_id !== std_id);
        setStudents(stds);
    };
    return (
        <>
            <h1>See all students who belong to this group.</h1>
            {stds.map((el, index) =>{
                return (
                    <ul key={index}>
                        <li>
                            {el.std_name} {el.std_surname}
                        </li><button onClick={() => deleteOne(el.student_id)} className="btn btn-success"> Delete student </button>
                    </ul>
                )
            })}
        </>
    )
}

export default GetGroupById;