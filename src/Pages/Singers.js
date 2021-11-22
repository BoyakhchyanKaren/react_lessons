import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import data from "../Information/info";
import React from "react";
function Singers() {
    const [singers, setSingers] = useState([]);
    useEffect(() => {
        setSingers(data);
    }, []);
    return (
        <div className="container mt-3">
            {
                singers.map((singer, singerIndex) => {
                    return (
                        <React.Fragment key={singerIndex}>
                            <h2>Card Image</h2>
                            <p>Image at the top (card-img-top):</p>
                            <div className="card" style={{width:"400px"}}>
                                <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa&pid=Api&P=0&w=300&h=300" alt="Card image" style={{width:"100%"}} />
                                <div className="card-body">
                                    <h4 className="card-title">{singer.name}</h4>
                                    <p className="card-text">{singer.name} has these albums {singer.albums.map((el,index) =>{
                                        return (
                                            <ul key={index}>
                                                <li>{el}</li>
                                            </ul>
                                        )
                                    })} </p>
                                    <Link to={`/singers/${singerIndex}`} className="btn btn-primary">See Profile</Link>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
};


export default Singers;