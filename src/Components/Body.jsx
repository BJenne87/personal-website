import About from "../Data/about.json"
import Hobbies from "../Data/hobbies.json"
import Card from "./Card.jsx"
import Links from "./Links.jsx"

const Body = () => {
    return(
        <>
        <div className="flex flex-col md:flex-row">
            {About.map((item,index) => (
                <Card key={index} title={item.title} body={item.body}/>
            ))}

        </div>
        <hr className="my-2"/>
        <h2 className="p-2">My Interests</h2>
        <div className="flex flex-col md:flex-row">
            {Hobbies.map((item,index) => (
                <Card key={index} title={item.title} body={item.body}/>
            ))}
        </div>
        <hr/>
        <h2 className="p-2">Contact Me!</h2>
        <Links/>
        </> 
    );
};

export default Body;