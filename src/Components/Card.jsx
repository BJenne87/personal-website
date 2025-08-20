const Card = (props) => {
  return (
    <div className="flex flex-col border items-center rounded-md w-screen md:h-128 md:w-128 p-4 m-4 bg-white transition ease-linear duration-300 shadow-md ">
      <h3 className="p-2 self-start">
        {props.title}
      </h3>
      <img src={props.source} alt="" className="h-4/5 w-4/5 justify-self-center object-fill" />
      <p className="p-2">
        {props.body}
      </p>
    </div>
  );
};

export default Card;
