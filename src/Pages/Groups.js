import {Link} from "react-router-dom";
import "../App.css"
function Groups({groups}) {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Group Name</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                {
                    groups.map((group, groupIndex) => {
                        return (
                            <tr key={groupIndex}>
                                <td>{group.group_name}</td>
                                <td><Link to={`/groups/${groupIndex}`} className="btn btn-info link-class"> See Group </Link></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default Groups;