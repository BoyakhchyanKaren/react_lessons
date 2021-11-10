import React from "react";
import "./style.css";
class ShowDevelopers extends React.Component {
    constructor(){
        super();
        this.state = {
            description: "--------React.js Homework One--------",
            developers: [
                {name:"Gagik", surname:"Nazaryan", age:21, skills:["HTML", "JavaScript", "React" ]},
                {name:"Armen", surname:"Harutyunyan", age:25, skills:["HTML", "CSS", "Python" ]},
                {name:"Taron", surname:"Nazaryan", age:21, skills:["HTML", "JavaScript", "React" ]},
                {name:"Samvel", surname:"Nazaryan", age:21, skills:["HTML", "JavaScript", "Vue.js" ]},
                {name:"Artur", surname:"Nazaryan", age:21, skills:["HTML", "JavaScript", "Angular" ]},
            ]
        }
    }
    delete(developerIndex){
        const developers = this.state.developers.filter((item, index) => index !== developerIndex);
        this.setState({developers});
    };
    render(){
        const listDevelopers = this.state.developers.map((developer, developerIndex)=>{
            return <ul key={developerIndex} className="ul_class">
                <li>{developer.name} {developer.surname}, with skills {developer.skills.map((skill,skillIndex)=>{
                    return (
                        <p key={skillIndex} className="p_class">
                            -- {skill}
                        </p>
                    )
                })}</li> <button onClick={this.delete.bind(this, developerIndex)} className="button_class">click here to delete developer</button>
            </ul>
        })
        return <div>
            <strong><i>{this.state.description}</i></strong>
            {listDevelopers}
        </div>
    }
}
export default ShowDevelopers;
