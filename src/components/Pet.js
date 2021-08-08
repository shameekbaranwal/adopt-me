import { Link } from "react-router-dom";

import none from "../../assets/none.jpg";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = none;

  if (images.length) {
    hero = images[0];
  }

  return (
    <div
      className="group bg-gray-300 rounded-xl pb-3 shadow-xl hover:bg-gray-600 transition duration-200 ease-in-out overflow-hidden"
      style={{ maxHeight: "30rem" }} //to fix abnormally long pet cards
    >
      <Link to={`/details/${id}`} className="h-full flex flex-col">
        <div className="flex justify-center h-4/5">
          <img
            src={hero}
            className="rounded-t-xl group-hover:rounded-full transition-all duration-150 w-full object-cover"
            alt={name}
          />
        </div>
        <div className="h-auto flex flex-col justify-center items-center px-2">
          <h1 className="font-bold text-center text-2xl my-1 group-hover:text-white">
            {name}
          </h1>
          <h2 className="text-center text-xl my-1 group-hover:text-white">{`${breed} ${animal}`}</h2>
          <h2 className="text-center text-l my-1 group-hover:text-white">
            {location}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Pet;
