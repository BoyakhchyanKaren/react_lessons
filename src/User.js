import React from "react";
import "./App.css"
class User extends React.Component{
    constructor() {
        super();
        this.state = {
            people:[],
            user:[],
        }
    };
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5)").then(txt => txt.json()).then(json => {
            this.setState({
                people:json
            })
        })
    };
    todos(ID){
        const two = this.state.people.find(el => el.id === ID);
        this.state.user.push({
            ...two
        });
        this.setState({
            user:this.state.user,
        })
    }
    render() {
        const length = this.state.user.length;
        return (
            <React.Fragment>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>Info</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.people.map((el,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>
                                            <button onClick={this.todos.bind(this, el.id)} className="btn btn-warning">Todos</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                <table className={length ? "btn1 table table-bordered" : "btn2"}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>To Do</th>
                        <th>Finish date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.user.map((el,index)=>{
                            const task  = el.id <= 3 ? "You should create new connection between nodejs application and postgreSQL" : "You should create migrations, constantly update the database and store there new properties";
                            const task_complete_time = el.id <=3  ? "12.26.2021" : "11.17.2021";
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{task}</td>
                                        <td>{task_complete_time}</td>
                                    </tr>
                                </React.Fragment>
                            )
                        })
                    }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
};

export default User;