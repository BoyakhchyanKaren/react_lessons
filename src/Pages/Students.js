function Students({students}) {
   return (
       <div>
           {
               students.map((student, studentIndex) => {
                   return(
                       <ul key={studentIndex}>
                           <li>{student.id} {student.name} {student.username}</li>
                       </ul>
                   )
               })
           }
       </div>
   )
};
export default Students;