const Card = (props) => {
    return(
        <div className="flex-1 border rounded-md p-4 m-4 bg-white transition ease-linear duration-300 shadow-md ">
        <h3 className="p-2">
            {props.title}
        </h3>
        <p className="text-justify p-2">
            {props.body}
        </p>
        </div>
    );
};

export default Card;