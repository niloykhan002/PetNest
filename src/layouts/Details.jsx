import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { petData } = useLoaderData();
  const { breed, date_of_birth, price, image, gender, pet_details, pet_name } =
    petData;
  return (
    <div className="my-20 w-3/4 mx-auto border rounded-lg">
      <div className="lg:flex bg-base-100 ">
        <figure className="p-5 lg:w-96 h-80">
          <img className="rounded-lg w-full h-full " src={image} alt="Album" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="text-xl font-bold">{pet_name}</h2>
          <div>
            {/* Breed */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <TfiMenuAlt />
                Breed:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {breed}
              </span>
            </p>
            {/* Birth */}
            <p className="flex gap-2 items-center">
              <span className="text-lg font-semibold text-dark2 flex items-center justify-center gap-2">
                <FaCalendar />
                Birth:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {date_of_birth}
              </span>
            </p>
            {/* Gender */}
            <p className="flex gap-2 items-center">
              <span className="text-lg text-dark2 font-semibold flex items-center justify-center gap-2">
                {gender === "Male" ? <IoMaleSharp /> : <IoFemaleSharp />}
                Gender:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {gender}
              </span>
            </p>
            {/* Price */}
            <p className="flex gap-2 items-center">
              <span className="text-lg text-dark2 font-semibold flex items-center justify-center gap-2">
                <BiSolidDollarCircle />
                Price:
              </span>
              <span className="text-lg text-dark2 flex items-center justify-center">
                {price}$
              </span>
            </p>
          </div>

          <button className="btn w-fit mt-4 border-none font-bold text-lg text-white bg-primary hover:bg-secondary hover:text-dark2">
            Adopt
          </button>
        </div>
      </div>
      <hr className="w-4/5 mx-auto" />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-3">Details Information</h3>
        <p>{pet_details}</p>
      </div>
    </div>
  );
};

export default Details;
