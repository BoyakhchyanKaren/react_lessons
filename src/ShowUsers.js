import React from "react";
class ShowUsers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users:this.props.users,
            allButton:false,
            usersLengthButton:false,
        }
    };
    deleteOneUser(userId){
        const user = this.state.users.filter((el,index) => el.id !== userId);
        this.setState({
            users:user,
        })
    };
    deleteAllUsers(){
        const btn = this.state.allButton;
        if(btn){
            this.setState({
                allButton:!this.state.allButton,
                users:[],
            })
        }else{
            this.setState({
                allButton:!this.state.allButton,
                users:this.props.users
            })
        }
    }
    render() {
        const users = this.state.users;
        const btn = this.state.usersLengthButton;
        const btnStyle = {
            display:"block"
        }
        return (
            <React.Fragment>
                <button style={btnStyle} onClick={() => {this.setState({
                    usersLengthButton:!this.state.usersLengthButton,
                })}} className={btn ? "btn btn-success" : "btn btn-info"}>
                    { btn ? "hide" : "show" }
                </button>
                {btn && users.length}
            <table className= "table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>email</th>
                    <th>age</th>
                    <th>DeleteUser</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user,userIndex)=>{
                        return (
                            <tr key={userIndex}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button onClick={this.deleteOneUser.bind(this, user.id)} className="btn btn-primary">
                                        Delete User
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                <button className="button_btn1 btn btn-warning" onClick={() => this.deleteAllUsers()}>
                    Delete all users
                </button>
            </React.Fragment>
        )
    }
};
export default ShowUsers;