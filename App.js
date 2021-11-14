import './App.css';
import React from "react";
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            users:[],
            maleButton:false,
            femaleButton:false,
            allButton:false,
        }
    };
    componentDidMount() {
        fetch("https://randomuser.me/api?results=20").then(el => el.json()).then(json=>{
            this.setState({
                users:json.results
            }, ()=>{
                console.log(this.state.users)
            })
        })
    };
    showMale = () => {
        const male = this.state.users.filter(el => el.gender === 'male');
        return male.map((el, index)=>{
            return (
                <div key={index}>
                    <h5>
                        Hello :) I am {el.name.title} {el.name.first} {el.name.last}, my gender is {el.gender}.
                    </h5>
                </div>
            )
        })
    };
    showFemale = () => {
        const female = this.state.users.filter(el => el.gender === 'female');
        return female.map((el,index)=>{
            return (
                <div key={index}>
                    <h5>
                        Hello :) I am {el.name.title} {el.name.first} {el.name.last},  my gender is {el.gender}.
                    </h5>
                </div>)
        })
    };
    showAll = () => {
        const all = this.state.users;
        return all.map((el,index)=>{
            return (
                <div key={index}>
                    <h5>
                        Hello :) I am {el.name.title} {el.name.first} {el.name.last},  my gender is {el.gender}.
                    </h5>
                </div>
            )
        })
    };
    render() {
        const male_btn = this.state.maleButton;
        const female_btn = this.state.femaleButton;
        const all_btn = this.state.allButton;
        return (
            <React.Fragment>
                <div className="d-grid">
                    <button className={ male_btn ? "btn btn-warning" : "btn btn-dark"} onClick={() => {this.setState({maleButton:!this.state.maleButton})}}>{ male_btn ? "Hide Boys" : "Boys" }</button>
                    {male_btn && this.showMale()}
                    <br />
                    <button className={ female_btn ? "btn btn-warning" : "btn btn-dark"} onClick={() => {this.setState({femaleButton:!this.state.femaleButton})}}>{ female_btn ? "Hide Girls" : "Girls" }</button>
                    {female_btn && this.showFemale()}
                    <br />
                    <button className={ all_btn ? "btn btn-warning" : "btn btn-dark"} onClick={() => {this.setState({allButton:!this.state.allButton})}}>{ all_btn ? "Hide all" : "All" }</button>
                    {all_btn && this.showAll()}
                </div>
            </React.Fragment>
        )
    }
}
export default App;
