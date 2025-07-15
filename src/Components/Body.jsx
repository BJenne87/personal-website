import "./Body.css";
import About from "../Data/about.json"
import Hobbies from "../Data/hobbies.json"
import Card from "./Card.jsx"

const Body = () => {
    return(
        <>
        <div className="card-container">
            {About.map((item,index) => (
                <Card key={index} title={item.title} body={item.body}/>
            ))}

        </div>
            <hr/>
        <h2>My Interests</h2>
        <div className="card-container">
            {Hobbies.map((item,index) => (
                <Card key={index} title={item.title} body={item.body}/>
            ))}
        </div>
        </> 
    );
};

export default Body;