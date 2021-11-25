function Students({students, groups}) {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                {
                    students.map((student, studentIndex) => {
                        return (
                            <tr key={studentIndex}>
                                <td>{student.std_name}</td>
                                <td>{student.std_surname}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default Students;