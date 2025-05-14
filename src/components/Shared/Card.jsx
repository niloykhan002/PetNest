import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaCalendar, FaHeart } from "react-icons/fa";
import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Card = ({ pet }) => {
  const {
    petId,
    breed,
    // category,
    date_of_birth,
    price,
    image,
    gender,
    // pet_details,
    // vaccinated_status,
    pet_name,
  } = pet;

  return (
    <div>
      <div className="card bg-base-100 border shadow-lg">
        <figure className="p-4">
          <img className="rounded-lg w-full h-56" src={image} alt="Pet" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl">{pet_name}</h2>
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
          <hr className="my-4" />
          <div class="grid grid-cols-4 gap-5">
            <div className="tooltip" data-tip="Add To Wishlist">
              <button className="btn rounded-lg text-lg text-primary bg-white border-secondary2 hover:text-red-600">
                <FaHeart />
              </button>
            </div>
            <div class="col-span-3 grid grid-cols-2 gap-5">
              <button className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:text-white hover:bg-primary">
                Adopt
              </button>
              <Link to={`/details/${petId}`}>
                <button className="btn rounded-lg font-bold text-primary text-lg bg-white border-secondary2 hover:bg-primary hover:text-white">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
