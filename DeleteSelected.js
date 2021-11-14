import React from "react";
import './App.css';

class DeleteSelectedWithColor extends React.Component{
    constructor(){
        super();
        this.state = {
            selected: [],
            users:[]
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    users:json
                })
            })
    };
    deleteOne = (userId) =>{
        const user = this.state.users.filter((el,index) => el.id !== userId );
        this.setState({
            users:user
        })
    };
    selectUser(index){
        let selected = this.state.selected;
        if(selected.includes(index)){
            selected = selected.filter(s => s !== index)
        } else {
            selected = [...selected, index];
        }
        this.setState({selected});
    }
    deleteSelected(){
        const selected = this.state.selected;
        const user = this.state.users.filter((el,index) =>!selected.includes(el.id));
        this.setState({
            users:user,
            selected: []
        })
    };
    render(){
        const user = this.state.users.map((el,index)=>{
            const isSelected = this.state.selected.includes(el.id);
            return (
                <div key = {index} className = "div_class">
                    <p>{el.id} with {el.email}</p>
                    <button
                        className = "button_class"
                        onClick = {this.deleteOne.bind(this, el.id)}> Click here to delete user</button><br /><br /><br />
                    <button className = { isSelected ? "blackButton" : "whiteButton" } onClick = {() => this.selectUser(el.id)}> Select users </button>
                </div>
            )
        })
        return (
            <div>
                {user}
                <button onClick = {this.deleteSelected.bind(this)}> Delete Selected </button>
            </div>
        )
    }
}
export default DeleteSelectedWithColor;