import {useDispatch, useSelector} from "react-redux";
import userAction from "../Store/User/userType";
import {useState} from "react";
import {AddUser, DeleteUser} from "../Store/User/action";

function User() {
    const {users} = useSelector((state) => state.userReducer);
    const [user, setUser] = useState({
        "id": 0,
        "first_name": "",
        "last_name": "",
        "email": ""
    })
    console.log(users);
    const dispatch = useDispatch();
    return (
        <>
            <div className="w-25 border p-3">
                <label>First Name:</label>
                <input
                    type="text"
                    value={user.first_name}
                    className="form-control my-2"
                    onChange={(e) => setUser({...user, first_name:e.target.value})}
                />
                <label>Last Name:</label>
                <input
                    type="text"
                    className="form-control my-2"
                    value={user.last_name}
                    onChange={(e) => setUser({...user, last_name:e.target.value})}
                />
                <label>Email:</label>
                <input
                    type="email"
                    className="form-control my-2"
                    value={user.email}
                    onChange={(e) => setUser({...user, email:e.target.value})}
                />
                <button
                    className="btn btn-info"
                    onClick={() => {
                        dispatch(AddUser({newUser:user}))
                        setUser({
                            "id": 0,
                            "first_name": "",
                            "last_name": "",
                            "email": ""
                        })
                    }}
                >
                    Add
                </button>
            </div>
            <div>
                {
                    users.map((user, userIndex) => {
                        return (
                            <ul key={userIndex}>
                                <li>Id: {user.id}</li>
                                <li>Name: {user.first_name}</li>
                                <li>Surname: {user.last_name}</li>
                                <li>Email: {user.email}</li>
                                <button
                                    className="btn btn-info"
                                    onClick={() => {
                                        dispatch(DeleteUser({id:user.id}))
                                    }}
                                >delete me
                                </button>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
};


export default User;