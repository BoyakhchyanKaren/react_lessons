import {useEffect, useState} from "react";
import data from "../Information/info";
import {useParams} from "react-router";
function SingerPage() {
    const {id} = useParams();
    const [singers, setSingers] = useState({});
    useEffect(() => {
        const singer = data[id];
        setSingers(singer);
    } , []);
    return (
            <div className="container mt-3">
                <h2>{singers.name}</h2>
                <p>See {singers.name}'s pictures</p>
                <img src="https://tse1.mm.bing.net/th?id=OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa&pid=Api&P=0&w=300&h=300" className="rounded-circle" alt="Cinque Terre" width="304" height="236" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa&pid=Api&P=0&w=300&h=300" className="rounded-circle" alt="Cinque Terre" width="304" height="236" />
                <img src="https://tse1.mm.bing.net/th?id=OIP.Sr4fxChDzgG6T-SG4zCS8wHaHa&pid=Api&P=0&w=300&h=300" className="rounded-circle" alt="Cinque Terre" width="304" height="236" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, beatae cumque cupiditate deleniti deserunt dolor dolorem eius eos est eum eveniet impedit ipsum iste nemo, placeat qui quidem recusandae totam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, expedita illo minus odit officia praesentium quos reiciendis reprehenderit sint voluptas. Accusamus error expedita iusto odio recusandae. Dolorem fugit praesentium vel.</p>
            </div>
    )
};

export default SingerPage;